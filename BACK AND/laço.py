import random 

#lista
#              0            1         2       3       4         5                 6          7             8
salgados = ["risoles", "coca-cola", "kibe", "Suco", "Bolo", "mini-churros", "pão de mel", "Donuts", "Cachorro-quente"]

print(salgados[2]) 
print("O sorteado foi: ", random.choices(salgados))

#imprimindo todos salgados
for posicao in range(len(salgados)):
    print(posicao, " - ", salgados[posicao])

contador = 0
while contador <3:
    print("O Rafael")
    contador = contador + 1

def listar():
    for posicao in range(len(salgados)):
        print(posicao, " - Alimento", salgados[posicao])


opcao = 0

while opcao != 4:
    opcao = int(input("Insira a opção:"))


    if opcao == 1:
        #Efetuando entrada de dados na lista
        item = input("Digite um item para adicionar na lista ")
        salgados.append(item)
        listar()
    
    if opcao == 2:
        item = input("Digite um item para adicionar na lista ")
        salgados.remove(item)
        listar()
    if opcao == 4:
        listar()
    if opcao == 5:
        input("ACABOU")
        break 
       
            
    

            









