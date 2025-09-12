idade = int(input("Insira sua idade: "))
# booleano - tipo de dado que pode ser Verdadeiro ou falso 
estudante = True 
temConvite = False 

# Pode entrar
# Se a pessoa tem mais de 17 anos e convite
# Ou se a pessoa tem menos de 18 anos e é estudante 

if(idade >= 18 and temConvite) or (idade < 18 and estudante):
    print("Entra no Baile 🦧")
else:
    print("Não pode entrar! 🙈")