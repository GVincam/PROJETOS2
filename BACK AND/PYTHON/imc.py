# peso = float(input("Insira seu Peso!"))
# altura = float(input("Insira sua Altura!"))

# imcFinal = (altura * altura) / peso

# print("O IMC é ", imcFinal)

# if altura >= 150:

#entrada

peso = float(input("Insira seu peso:(Kg): "))
altura = float(input("Insira a altura(Metros): "))
sexo = input("Insira o sexo: M - para masculino e F para Feminino ")

imc = peso / altura ** 2
imc = peso / (altura * altura)

print("Seu imc é: ", imc)
if(sexo == "M" or sexo == "m" or sexo == "masculino"):
    print("Imc Masculino")
elif(sexo == "F" or sexo == "f" or sexo == "feminino"):
    print("Imc Feminino")
else:
    print("Outro")

if(imc < 18.5):
    print("Você está abaixo do peso! ")
elif(imc <= 24.9):
    print("Peso Normal! ")
elif(imc <= 29.9):
    print("Você está com sobrepeso! ")
elif(imc <= 34.9):
    print("Você esta com obesidade classe I ")
elif(imc <= 39.9):
    print("Você está com obesidade classe II ")
else:

    print("Caso de urgência! ")



