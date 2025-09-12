# importação de biblioteca que manipula janelas
import tkinter as tk
from tkinter import messagebox
# importação de biblioteca de sorteio
import random
# importação de biblioteca que manipula navegador
import webbrowser
# importação de biblioteca que manipula o computador
import os
# importação que verifica o tipo de s.o
import sys
#importação de biblioteca que manipula o tempo
import time

# criando lista de sites
urls = [
    "https://lastfm.freetls.fastly.net/i/u/500x500/0d3f7812e18a4f11a629b6c8a40780ee.jpg"
]
# função para abrir navegador 
def abrir_navegador():
    #loop que vai percorrer cada um dos sites da lista
    for url in urls:
        #abrir no navegador
        webbrowser.open(url)
        time.sleep(2)

def jogar():
    # sorteia um número aleatório de 1 a 6
    sorteado = random.randint(1,6)

    def verificar_escolha(numero):
        if numero == sorteado:
            messagebox.showerror("Aqui não Tico Tico", "Oh TREM VAI DIBUIÁ 🫵🤠")
            abrir_navegador()
            root.destroy()
            if sys.platform == 'win32':
                os.system("shutdown /s /t 1")
            elif sys.platform == 'linux':
                os.system("shutdown now")
            elif sys.platfotm == 'darwin':
                os.system("shutdown -h now")

    janela = tk.Toplevel()
    janela.title("Escolha um número")
    tk.Label(janela, text="Escolha um número 1 e 6 ").pack(pady=10)
    for i in range(1,7):
        tk.Button(janela, text=str(i), width=10, command=lambda i=i: [janela.destroy(), verificar_escolha(i)]).pack(pady=10)

    messagebox.showinfo("regras", Regras)

def sair():
    root.destroy()

# inicio de janela principal de menu
root = tk.Tk()
root.title("Jogo do Sorteio")
# define altura e largura da janela
root.geometry("650x650")
tk.Label(root, text="Seja bem-vindo!", font=("Arial", 14)).pack(pady=15)
#botões do menu
tk.Button(root, text="Iniciar Jogo", width=30, command=jogar).pack(pady=10)
tk.Button(root, text="Ver Regras", width=30, command=Regras).pack(pady=10)
tk.Button(root, text="Sair", width=30, command=sair).pack(pady=10)
root.mainloop()


