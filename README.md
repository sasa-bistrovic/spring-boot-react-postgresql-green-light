<p><b><font face="Arial" size="4">Postupak za pokretanje projekta :</font></b></p>
<p><b><font face="Arial">1. Korištena JDK verzija JAVA-e :</font></b></p>
<p><font face="Arial">JAVA_HOME=C:\Program Files\Java\jdk1.8.0_301</font></p>

<p><b><font face="Arial">2</font></b><font face="Arial"><b>. Klonirajte projekt iz github.com naredbom :</b></font></p>

<p><font face="Arial">$ git clone https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light.git</font></p>

<p><b><font face="Arial">3</font></b><font face="Arial"><b>. U mapi "/spring-boot-react-postgresql-green-light/react-crud" pokrenite naredbu :</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ yarn install</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">i</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ yarn build</font></p>

<p><b><font face="Arial">4</font></b><font face="Arial"><b>. Podesite u "spring-boot-react-postgresql-green-light/spring-boot-server/src/main/resources/application.properties"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.url= jdbc:postgresql://localhost:5432/postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.username= postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.password= x</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial"># Hibernate ddl auto (create, create-drop, validate, update)</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.hibernate.ddl-auto= update</font></p>

<p><b><font face="Arial">5</font></b><font face="Arial"><b>. Podesite u "spring-boot-react-postgresql-green-light/spring-boot-server/src/test/resources/application.properties"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.url= jdbc:postgresql://localhost:5432/postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.username= postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.password= x</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial"># Hibernate ddl auto (create, create-drop, validate, update)</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.hibernate.ddl-auto= update</font></p>

<p><b><font face="Arial">6</font></b><font face="Arial"><b>. Podesite u java datoteci "spring-boot-react-postgresql-green-light/spring-boot-server/src/main/java/com/example/integrate/spring/react/service/impl/ProductRestClient.java</b></font></p>

<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String host="localhost";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String port="5432";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String username="postgres";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String password="x";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String database="postgres";</font></p>

<p><b><font face="Arial">7</font></b><font face="Arial"><b>. Pokrenite naredbe u mapi "spring-boot-react-postgresql-green-light/spring-boot-server"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ mvn clean install</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">i</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ mvn spring-boot:run</font></p>

<p><b><font face="Arial">8</font></b><font face="Arial"><b>. Naredbe Spring Boot Rest-a su :</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">POST	/api/products			izra&#273;uje novi proizvod</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products			prima sve proizvode</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products/:id		prima proizvode prema :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">PUT	/api/products/:id		mijenja proizvode prema :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">DELETE	/api/products/:id		briše proizvode prema :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">DELETE	/api/products			briše sve proizvode</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products?name=[keyword]	traži prozvode prema nazivu</font></p>

<p><b><font face="Arial">9</font></b><font face="Arial"><b>. Primjer JSON poruke :</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">{ "code":"1111111111",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"name":"Braun Series 1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"pricehrk":"500",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"description":"Trimer",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"isAvailable":true}</font></p>

<p><b><font face="Arial">10</font></b><font face="Arial"><b>. A povratno se dobije JSON na primjer :</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">{ "id":"1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"code":"1111111111",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"name":"Braun Series 1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"pricehrk":"500.00",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"priceeur":"66.40",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"description":"Trimer",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"isAvailable":true}</font></p>

<p><font face="Arial"><b>11. Evo nekoliko slika iz REACT-CRUD primjera kod pokretanja url-a "http://localhost:8080" :</b></font></p>

<font face="Arial">

<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-1.PNG"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-2.PNG"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-3.PNG"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-4.PNG"></img>

</font>

<p><font face="Arial"><b>12. I slike od Spring Boot Rest-a :</b></font></p>

<font face="Arial">

<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-5.png"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/blob/main/spring-boot-react-postgre-picture-6.png"></img>

</font>