package operadoresLogicos;

public class OperadoresLogicos {
	public static void main(String[] args) {
		
		/*&& AND devielve true si ambas expresiones son verdaderas
		 * || OR devuelve true si al menos una de las condiciones se cumple
		 * ! NOT si la expresion booleana es falsa devuelve true y viceversa
		 */
		
		//&& AND
		
		String cliente = "cliente123";
		String credenciales = "takisfuego123";
		
		boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("takisfuego123");
		
		System.out.println("Inicio de sesión: "+credencialCorrecta);
		
		//|| OR
		
		double costoPasaje = 380.50;
		int edad = 65;
		boolean inapam = false;
		
		boolean descuentoAdultoMayor = edad  >= 60 || inapam;
		
		System.out.println("¿Tiene descuento? " + descuentoAdultoMayor);
		
		// ! NOT
		
		boolean asientosDisponibles = true;
		boolean libres = true;
		boolean asientosConDescuento = !libres;
		
		System.out.println("¿Hay asientos disponibles? " + asientosConDescuento);
		
		/*
		 * Autobús a oaxaca
costo boleo 350
boleto*
62 asientos
4 destinados a adultxs mayores
6 a estudiantes
descuento a inapam es de 35%
a estudiantes 30%
		 */
		
		int costoBoleto=350;
		int capacidadTotal= 62; //asientos
		int asignadosAncianos=4; //destinados a adultxs mayores
		int asignadosEstudiantes=6; //a estudiantes
		//descuento a inapam es de 35%
			//a estudiantes 30%
			 //* 
		
		
		
			double maxCompra = (asignadosAncianos*(costoBoleto*0.65))+(asignadosEstudiantes*(costoBoleto*0.65));
			System.out.println("La venta total de un autobus con 4 Ancianos y 6 estudiantes es: $"+ maxCompra);
		
		
	
		
	}
}
