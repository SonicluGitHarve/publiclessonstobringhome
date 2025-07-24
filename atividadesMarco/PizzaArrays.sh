#!usr/bin/bash

pizzanames=("/Alho e Oleo/" "/Palmito/" "/Brocolis/" "/Cebola e Pesto/" "/Marinara/")
pazzword="Mestre123"

echo "Oi! você é o dono da pizzaria?"

read answer

if [ $answer = $pazzword ];
then
echo "Olá Pantheon Padeiro! Qual pizza você gostaria de adicionar hoje?"
echo "As disponíveis agora são:"
echo "${pizzanames[@]}"
read newpizza
pizzanames+=("$newpizza")
echo "Feito, o sabor $newpizza foi adicionado, o cardápio agora é:"
echo "${pizzanames[@]}"
else
echo "Olá cliente! Qual pizza você gostaria?"
echo "${pizzanames[@]}"
cardlent=${#pizzanames[@]}
echo "Digite um número de 1 a $cardlent correspondente a pizza."
read pizzaorder
echo "Você escolheu ${pizzanames[(($pizzaorder - 1))]}, correto? [Correto] / [Outra]"
read orderanswer
if [ $orderanswer = "Correto" ];
then
echo "Maravilha, enviaremos a pizza para você!"
else
orderfinish="false"
while [ $orderfinish = "false" ]
do
echo "Okay, qual pizza então?"
echo "${pizzanames[@]}"
echo "Digite um número de 1 a $cardlent correspondente a pizza."
read pizzaorder
echo "Você escolheu ${pizzanames[(($pizzaorder - 1))]}, correto? [Correto] / [Escolher Outra]"
read orderanswer
if [ $orderanswer = "Correto" ];
then
orderfinish="true"
fi
done
echo "Maravilha, enviaremos a pizza para você!"
fi
fi