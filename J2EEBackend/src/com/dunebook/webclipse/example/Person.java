package com.dunebook.webclipse.example;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;
/**
 * Person entity. @author vikas 
 */
@XmlRootElement
@Entity
@Table(name = "PERSON", schema = "EMPLOYEE")
public class Person implements java.io.Serializable {
	// Fields
	private static final long serialVersionUID = 1L;
	private Integer id;
	private String name;
	private String gender;
	private String city;
	// Constructors
	/** default constructor */
	public Person() {
	}
	/** minimal constructor */
	public Person(Integer id) {
		this.id = id;
	}
	/** full constructor */
	public Person(Integer id, String name,
			String gender, String city) {
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.city = city;
	}
	// Property accessors
	@Id
	@Column(name = "ID")
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "NAME", length = 50)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "GENDER", length = 20)
	public String getGender() {
		return this.gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	@Column(name = "CITY", length = 30)
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	

}