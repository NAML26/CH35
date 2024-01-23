package Funciones;
import java.util.ArrayList;
import java.util.List;
public class Funciones {
	
	static class Producto {
	String nombre;
	double precio;
	
	Producto (String nombre, double precio){
		
		this.nombre = nombre;
		this.precio = precio;
		
	    }
	}
	static class CarritoCompra {
		List <Producto> productos = new ArrayList <> ();
		
		void agregarProducto (Producto pelota) {
			productos.add(pelota);
			}
	}
		double calcularTotal () {
			double total = 0;
			for(Producto pelota : productos) {
				total += pelota.precio;
			}
		}
		
	

	public static void main(String[] args) {
		Producto pelota1 = new Producto ("Roja", 15.50);
		Producto pelota2 = new Producto ("Azul", 15.50);

		CarritoCompra carrito = new CarritpCompra ();
		
		carrito.agregarProducto (pelota1);
		carrito.agregarProducto(pelota2);
		
		double totalCarrito = carrito.calcularTotal ();
		
		System.out.println("Total del carrito: $" + totalCarrito);
		
	}

}
