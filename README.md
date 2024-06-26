<p><b><font face="Arial" size="4">Procedure for starting the project:</font></b></p>
<p><b><font face="Arial">1. Used JDK version of JAVA:</font></b></p>
<p><font face="Arial">JAVA_HOME=C:\Program Files\Java\jdk-21</font></p>

<p><b><font face="Arial">2</font></b><font face="Arial"><b>. Clone the project from github.com with the command:</b></font></p>

<p><font face="Arial">$ git clone https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light.git</font></p>

<p><b><font face="Arial">3</font></b><font face="Arial"><b>. In the "/spring-boot-react-postgresql-green-light/react-crud" folder, run the command:</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ npm install</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">and</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ npm run build</font></p>

<p><b><font face="Arial">4</font></b><font face="Arial"><b>. Set in "spring-boot-react-postgresql-green-light/spring-boot-server/src/main/resources/application.properties"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.url= jdbc:postgresql://localhost:5432/postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.username= postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.password= x</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial"># Hibernate ddl auto (create, create-drop, validate, update)</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.hibernate.ddl-auto= update</font></p>

<p><b><font face="Arial">5</font></b><font face="Arial"><b>. Set in "spring-boot-react-postgresql-green-light/spring-boot-server/src/test/resources/application.properties"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.url= jdbc:postgresql://localhost:5432/postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.username= postgres</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.datasource.password= x</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial"># Hibernate ddl auto (create, create-drop, validate, update)</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">spring.jpa.hibernate.ddl-auto= update</font></p>

<p><b><font face="Arial">6</font></b><font face="Arial"><b>. Set in java file "spring-boot-react-postgresql-green-light/spring-boot-server/src/main/java/com/example/integrate/spring/react/service/impl/ProductRestClient.java"</b></font></p>

<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String host="localhost";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String port="5432";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String username="postgres";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String password="x";</font></p>
<p style="margin-top: 0; margin-bottom: 0">    <font face="Arial">private String database="postgres";</font></p>

<p><b><font face="Arial">7</font></b><font face="Arial"><b>. Run commands in "spring-boot-react-postgresql-green-light/spring-boot-server" folder</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ mvn clean install</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">and</font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">$ mvn spring-boot:run</font></p>

<p><b><font face="Arial">8</font></b><font face="Arial"><b>. Spring Boot Rest commands are:</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">POST	/api/products			creates a new product</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products			receives all products</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products/:id		receives products according to :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">PUT	/api/products/:id		changes products according to :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">DELETE	/api/products/:id		deletes products by :id</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">DELETE	/api/products			deletes all products</font></p>
<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">GET	/api/products?name=[keyword]	searches for products by name</font></p>

<p><b><font face="Arial">9</font></b><font face="Arial"><b>. Example of a JSON message:</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">{ "code":"1111111111",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"name":"Braun Series 1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"pricehrk":"500",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"description":"Trimer",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"isAvailable":true}</font></p>

<p><b><font face="Arial">10</font></b><font face="Arial"><b>. And JSON is returned, for example:</b></font></p>

<p style="margin-top: 0; margin-bottom: 0"><font face="Arial">{ "id":"1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"code":"1111111111",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"name":"Braun Series 1",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"pricehrk":"500.00",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"priceeur":"66.40",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"description":"Trimer",</font></p>
<p style="margin-top: 0; margin-bottom: 0">  <font face="Arial">"isAvailable":true}</font></p>

<p><font face="Arial"><b>11. Here are some pictures from the REACT-CRUD example when starting the url "http://localhost:8080":</b></font></p>

<font face="Arial">

<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-1.png"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-2.png"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-3.png"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-4.png"></img>

</font>

<p><font face="Arial"><b>12. And images from Spring Boot Rest:</b></font></p>

<font face="Arial">

<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-5.png"></img>
<img src="https://github.com/sasa-bistrovic/spring-boot-react-postgresql-green-light/blob/main/spring-boot-react-postgres-picture-6.png"></img>

</font>