package org.generation.exercises;
import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
	public static void main(String[] args) {
		//HashSet es una clase de Collections donde cada elemento es unico, no se repiten.
		
		HashSet<String> animals = new HashSet<String>();
		
	animals.add("Capibara");
	animals.add("Cebra");
	animals.add("Mapache");
	animals.add("Burro");
	
	//Imprimir el HashSet
	System.out.println(animals);
	
	//Conocer si un elemento se encuentra dentro del Set: contains();
	System.out.println(animals.contains("Capibara"));
	
	//Eliminar un elemento: remove();
	
	animals.remove("Mapache");
	System.out.println(animals); //Imprimir el Set sin el elemento eliminado
		
	//Agregar elementos en una sola linea
	animals.addAll(Arrays.asList("Perro", "Gato", "Osito"));
	System.out.println(animals);
	
	/*La clase HashSet no va a garantizar que los elementos se muestren según el orden en el que se ingresaron, porque busca eficientar la busqueda y recuperación de los elementos. 
	 * Utiliza tablas Hash para almacenar los elementos y mostrarlos al usuario. 
	 */
	
	
	//Limpiar el HashSet: .clear();
	animals.clear();// [] 
	System.out.println(animals);
	
	}
}
