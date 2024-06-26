package com.example.integrate.spring.react.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import java.net.*;
import java.io.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.integrate.spring.react.model.Product;
import com.example.integrate.spring.react.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ProductController {

	@Autowired
	ProductRepository productRepository;

	@GetMapping("/products")
	public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) String name) {
		try {
			List<Product> products = new ArrayList<Product>();

			if (name == null)
				productRepository.findAll().forEach(products::add);
			else
				productRepository.findByNameContaining(name).forEach(products::add);

			if (products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(products, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable("id") long id) {
		Optional<Product> productData = productRepository.findById(id);

		if (productData.isPresent()) {
			return new ResponseEntity<>(productData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/products")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {
		try {
        if (product.getCode().length()==10) {
        File file = new File(
            "eur_conversion");
         BufferedReader br
            = new BufferedReader(new FileReader(file));

        String st;
        String token="";
        while ((st = br.readLine()) != null)
            token=token+st;

        float eurconversion = Float.valueOf(0);
        float pricehrk = Float.valueOf(0);
       	try {
          eurconversion=Float.parseFloat(token);
          pricehrk = Float.parseFloat(product.getPricehrk());
    	}
    	catch (NumberFormatException e) {
   	}

        if (pricehrk<0) {
           pricehrk=0;
        }

        product.setPricehrk(String.format("%.2f", pricehrk).replace(",","."));
        product.setPriceeur(String.format("%.2f", pricehrk/eurconversion).replace(",","."));

			Product _product = new Product();
			_product.setCode(product.getCode());
			_product.setName(product.getName());
			_product.setPricehrk(String.format("%.2f", pricehrk).replace(",","."));
			_product.setPriceeur(String.format("%.2f", pricehrk/eurconversion).replace(",","."));
			_product.setDescription(product.getDescription());
			_product.setIsAvailable(product.getIsAvailable());
			return new ResponseEntity<>(productRepository.save(_product), HttpStatus.OK);
        } else
        {
        return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
	}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
		}
           
	}

	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable("id") long id, @RequestBody Product product) {
		Optional<Product> productData = productRepository.findById(id);

		if (productData.isPresent()) {
	if (product.getCode().length()==10) {
        try {
        File file = new File(
            "eur_conversion");
         BufferedReader br
            = new BufferedReader(new FileReader(file));

        String st;
        String token="";
        while ((st = br.readLine()) != null)
            token=token+st;

        float eurconversion = Float.valueOf(0);
        float pricehrk = Float.valueOf(0);
       	try {
          eurconversion=Float.parseFloat(token);
          pricehrk = Float.parseFloat(product.getPricehrk());
    	}
    	catch (NumberFormatException e) {
   	}

        if (pricehrk<0) {
           pricehrk=0;
        }
			Product _product = productData.get();
			_product.setCode(product.getCode());
			_product.setName(product.getName());
			_product.setPricehrk(String.format("%.2f", pricehrk).replace(",","."));
			_product.setPriceeur(String.format("%.2f", pricehrk/eurconversion).replace(",","."));
			_product.setDescription(product.getDescription());
			_product.setIsAvailable(product.getIsAvailable());
			return new ResponseEntity<>(productRepository.save(_product), HttpStatus.OK);
        } catch (MalformedURLException e) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    	//e.printStackTrace();
  	} catch (IOException e) {
    	//e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  	}
        } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<HttpStatus> deleteProduct(@PathVariable("id") long id) {
		try {
			productRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

	@DeleteMapping("/products")
	public ResponseEntity<HttpStatus> deleteAllProducts() {
		try {
			productRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}

	}

	@GetMapping("/products/isavailable")
	public ResponseEntity<List<Product>> findByIsavailable() {
		try {
			List<Product> products = productRepository.findByIsavailable(true);

			if (products.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(products, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}

}
