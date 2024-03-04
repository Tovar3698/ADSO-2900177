## Ejercicio #1

'''
----
Inicio
    Definir a Como Real;
    
    a <- 0.0;

    Escribir"Digite un número: ",a;

    Leer a;

    Si a> = 5 Entonces

        Escribir "El número es mayor o igual que 5: ";

    SiNo

        Escribir"El número es menor que 5: ";  

    FinSi  

Fin
----
a = float(input("Ingrese un digito: "))

If a >= 5:

    print("El número es mayor que 5: ")

Else:
    print("El número es menor que 5: ")
----
'''
----
#PseudoCodigo

Inicio

    Definir nr, cnr Como Real;

    nr = 0.0;

    cnr = 0.0;

    Escribir"Digite un número real: ";

    Leer nr;

    cnr = (nr * nr)

    Escribir"El número al cuadrado es: ",cnr;

    Si cnr >= 5000 Entonces

        Escribir"El número es mayor o igual a 5000: "

    SiNo

        Escribir"El número es menor que 5000: "

    FinSi
Fin
----
#Python

nr = 0.0

cnr = 0.0

nr = float(input("Digite un número real: "))

cnr = (nr * nr)

print("El numero cuadrado es: ",cnr)

If cnr >= 5000:

    print("El número es mayor o igual a 5000: ")

Else:

    print("El número es menor a 5000: ")
    
'''
----

Inicio 

  Definir P1, P2, P3, Por1, Por2, Por3,tot como Real;

  P1 = 0.0;

  P2 = 0.0;

  P3 = 0.0;

  Por1 = 0.0;

  Por2 = 0.0;

  Por3 = 0.0;

  tot = 0.0;

  Escribir "Por favor ingrese la inversion de la persona1: ";

  