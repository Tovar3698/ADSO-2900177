def verificar_par_impar_positivo(numero):
    if numero % 2 == 0:
        print("{numero} es un número par.")
    else:
        print("{numero} es un número impar.")
    
    if numero > 0:
        print("{numero} es un número positivo.")
    elif numero < 0:
        print("{numero} es un número negativo.")
    else:
        print("{numero} es cero.")

def main():
    try:
        numero = int(input("Introduce un número entero: "))
        verificar_par_impar_positivo(numero)
    except ValueError:
        print("Error: Por favor, introduce un número entero válido.")

if __name__ == "__main__":
    main()