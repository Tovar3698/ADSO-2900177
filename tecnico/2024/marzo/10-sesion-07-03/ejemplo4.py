def imprimir_mayor_o_numero(num1, num2):
    # Verifica si el segundo número es negativo y el primer número es impar
    if num2 < 0 and num1 % 2 != 0:
        # Si se cumple la condición, imprime el mayor de los dos números
        print("El mayor número es:", max(num1, num2))
    else:
        # Si no se cumple la condición, imprime el segundo número
        print("El número es:", num2)

# Solicita al usuario que ingrese el primer número
numero1 = int(input("Ingrese el primer número: "))
# Solicita al usuario que ingrese el segundo número
numero2 = int(input("Ingrese el segundo número: "))

# Llama a la función para imprimir el mayor número o el segundo número según la condición
imprimir_mayor_o_numero_o_menor(numero1, numero2)
