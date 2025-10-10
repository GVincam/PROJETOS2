idade = int(input("insira sua idade: "))
ingresso = int (input("Insira o valor do Ingresso!: "))
desconto = int 


ingresso = 120


if(idade <= 12):
    desconto = 50
    print(f"Seu desconto é de: {desconto}%" " Voce só pagara 60 reais!")
    
elif(idade >= 60):
    desconto = 30
    print(f"Seu desconto é de: {desconto}%" " Voce só pagara 84 reais!")
    
elif(idade >= 13) and (idade <= 59):
    desconto = 0
    print(f"Pagara somente: R${ingresso}")