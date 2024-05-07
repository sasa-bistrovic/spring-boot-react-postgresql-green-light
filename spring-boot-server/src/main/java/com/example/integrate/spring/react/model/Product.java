package com.example.integrate.spring.react.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

        @Column(name = "code")
	private String code;

	@Column(name = "name")
	private String name;

	@Column(name = "pricehrk")
	private String pricehrk;

	@Column(name = "priceeur")
	private String priceeur;

	@Column(name = "description")
	private String description;

	@Column(name = "isavailable")
	private boolean isavailable;

	public Product() {

	}

	public Product(String code, String name, String pricehrk, String description, boolean isavailable) {
		this.code = code;
		this.name = name;
		this.pricehrk = pricehrk;
		this.description = description;
		this.isavailable = isavailable;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPricehrk() {
		return pricehrk;
	}

	public void setPricehrk(String pricehrk1) {
		this.pricehrk = pricehrk1;
	}

	public String getPriceeur() {
		return priceeur;
	}

	public void setPriceeur(String priceeur1) {
		this.priceeur = priceeur1;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean getIsAvailable() {
		return isavailable;
	}

	public void setIsAvailable(boolean isavailable1) {
		this.isavailable = isavailable1;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", code=" + code + ", name=" + name + ", pricehrk=" + pricehrk + ", priceeur=" + priceeur + ", description=" + description + ", isavailable=" + isavailable + "]";
	}

}
