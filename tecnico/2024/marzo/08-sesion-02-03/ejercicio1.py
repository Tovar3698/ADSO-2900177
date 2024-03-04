p1 = float(input("Por favor ingrese la inversión de la persona 1: "))
p2 = float(input("Por favor ingrese la inversión de la persona 2: "))
p3 = float(input("Por favor ingrese la inversión de la persona 3: "))

totl = p1+p2+p3
por1 = (p1/totl)*100
por2 = (p2/totl)*100
por3 = (p3/totl)*100

print("La inversión total fue de ",totl,"$")
print("El porcentaje de inversión de la persona 1 es de ",por1,"%")
print("El porcentaje de inversión de la persona 2 es de ",por2,"%")
print("El porcentaje de inversión de la persona 3 es de ",por3,"%")
