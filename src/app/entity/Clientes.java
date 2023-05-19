package app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="clientes")
public class Clientes implements IHasIntID{

    //Parameters
	@Id
	@Column(name="id") 
	private int id;
	
	@Column(name="nombre") 
	private String nombre;
	
	//Constructor
	public Clientes() {}
	
	public Clientes(int id, String name) {
		this.id = id;
		this.nombre = name;
	}

    //Getters Setters
	@Override
	public int getId() {
		return id;
	}	

	@Override
	public void setId(int id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String name) {
		this.nombre = name;
	}
}