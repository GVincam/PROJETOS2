print("Olá mundo")

def maior(num1, num2):
    if num1 > num2:
      return num1
    elif num2 > num1:
       return num2
    elif num1 > num2 :
       return "Os número são iguais!"
    else: 
       return "Evento inesperado"

#Entrada de dados
num1 = int(input("Insira o primeiro número: "))
num2 = int(input("Insira o segundo número: "))

resultado = maior(num1, num2)
print("O maior número é ", resultado)