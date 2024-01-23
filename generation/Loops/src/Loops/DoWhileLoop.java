package Loops;
import java.util.Scanner;
public class DoWhileLoop {

	public static void main(String[] args) {
		/*
		 * Ciclo Do While evalúa la expresión en la parte inferior del ciclo.
		 * Por tanto, las declaraciones dentro del "do" siempre se ejecutan al menos una vez.
		 */
		
		//Cuenta del 1 a 20 
		int cuenta = 5;
		do {
			System.out.println("Cuenta "+ cuenta);
			cuenta++;
		} while (cuenta < 0); //Output 1 ya se ejecutó al menos 1 vez

		/*
		 * Crear un programa para un cajero bancario
		 * - El programa me mostrará 4 opciones:
		 * 1. Consultar saldo
		 * 2. Ingresar dineros
		 * 3. Retirar dineros
		 * 4. Salir
		 * - Mostrar mensaje de bienvenida al usuario, darle contexto y solicitar que elija una opción (número)
		 * - Mostrar al usuario la opción que eligió y permitir que elija otra opción
		 * - El usuario puede salir del programa escribiendo 4 (salir)
		 */
		
		System.out.println("Bienvenido al banco, elije una opción: ");
		
		System.out.println("1. Consular slado");
		System.out.println("2. Deposito");
		System.out.println("3. Retiro");
		System.out.println("4. Salir");
		
		Scanner scr = new Scanner (System.in);
		int opcion;
		
		do {
			opcion = scr.nextInt ();
			
			switch(opcion) {
			
			case 1: System.out.println("Consultar saldo");
				break;
			case 2:
				System.out.println("Ingrese el monto a depositar");
				break;
			case 3:
				System.out.println("Ingrese el monto a retirar ");
				retirar=scanner.nextInt();
				retirar-=añadir;
				break;
			case 3: System.out.println("Ingresa la cantidad que quieres retirar");
			break;
			case 4: System.out.println("Gracias");
			break;
			
			default: 
				System.out.println("Por favor ingresa una opción valida")
			}
		} while (opcion != 4);
		
		scr.close();
		
	}//main

}//class