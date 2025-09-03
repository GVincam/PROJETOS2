import random
import os
import sys
import time
import webbrowser

def abrir_janelas():
    url = [
        "https://www.dicio.com.br/perdeu/"
    ]
    for i in url:
        webbrowser.open(i)

def jogar():
    opcoes = 6
    escolhido = random.randint(1, opcoes )
    #campo de entrada de número
    try: 
        escolha = int(input(f"Escolha um número entre 1 e {opcoes}"))
        if escolha < 1 or escolha > opcoes:
            raise ValueError("Número fora do intervalo permitido!")
    except ValueError as e:
        print("Entrada inválida")
        jogar()
        if escolha == escolhido: 
            print("aqui não tico tico 🤠")
            abrir_janelas()
            time.sleep(5)
            if sys.platform == 'win32':
                os.system("shutdown /r /t 1")
            elif sys.platform == 'linux' or sys.platform == 'linux2':
                os.system("shutdown now")
            elif sys.platform == 'darwin':
                os.system("shutfow -h now")
        else:
            print("Aí sim em patrão 🫵")

    def regras():
        print("""
        Regras do jogo:
        1. Você deve escolher um número entre 1 e 6
        2. Se vocÊ acertar o PC será desligado!
        3. Ao escolher um número diferente, o jogo continuará
        """)


    def menu_principal():
        print("Menu Principal")
        print("1. Iniciar Jogo")
        print("2. Ver regras")
        print("3. sair")

        escolha = int(input("Escolha uma opção: "))
        if escolha == 1:
            jogar()
        if escolha == 2:
            regras()
        if escolha == 3:
            print("Saindo!")


    menu_principal()

