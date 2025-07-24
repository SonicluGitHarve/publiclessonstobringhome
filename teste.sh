#!/usr/bin/bash

user=$(whoami)
today=$(date)

if [ -f /c/Users/Harve/userinfo.sh ];
then
source /c/Users/Harve/userinfo.sh
echo "Olá! Aqui vejo que seu nome é $username, está correto ou gostaria de ser chamado por outro nome?"
name=$username
else
touch /c/Users/Harve/userinfo.sh
echo "Oi! Eu usuário $user! Espero que esteja tudo certo. Seu nome é mesmo $user ou prefere outro nome?"
echo "username='$user'" >> /userinfo.sh
name=$user
fi

echo "Escreva [Correto] se este for seu nome ou [Mudar] para registrar novo nome."

read answer

if [ $answer = "Correto" ];
then
echo "Ótimo. Prazer falar com você novamente $name!"
elif [ $answer = "Mudar" ];
echo "Beleza, qual seu nome então?"
read newname
echo "Prazer te conhecer $newname!"
echo "username='$newname'" >> /c/Users/Harve/userinfo
fi

echo "Então $username, hoje, na data $today, vamos fazer a seguinte atividade:"