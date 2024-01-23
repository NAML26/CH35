package com.generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {
	public static void main(String[] args) {
		
		//El método .sort() permite ordenar los elementos de un ArrayList
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		points.add(5);
		points.add(4);
		points.add(7);
		
		System.out.println(points); //No se encuentran ordenados de menor a mayor, solo como fueron agregados al ArrayList
		
		//Ordenamiento de menor a mayor utilizando sort
		
		Collections.sort(points);
		System.out.println(points); //Ordenados de menor a mayor
		
		names.add("Daniel");
		names.add("Rocio");
		names.add("Juan");
		names.add("pedro");
		
		System.out.println(names);//Devuelve los nombre en el orden que fueron ingresados
		
		//Ordenando de menor a mayor utilizando sort
		Collections.sort(names);
		System.out.println(names); //Toma en cuenta el ordenamiento con base en la tabla ASCII
		
	}
}
