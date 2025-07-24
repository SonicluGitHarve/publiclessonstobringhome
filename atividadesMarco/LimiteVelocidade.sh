#!/usr/bin/bash

speedlmt=50
payperkm=6

echo "Olá Usuario! Este é o verificador de multa para o kilometro 120 da BR101. Por favor informe qual a sua velocidade registrada."

read userspeed

if [ $userspeed -gt $speedlmt ];
then
speedovrlmt=$(($userspeed - $speedlmt))
totalticket=$(($speedovrlmt * $payperkm))
echo "Bah meu! Putz, se ferrasse... Infelizmente você estava sim acima do limite de velocidade... E infelizmente terás que pagar R\$$totalticket,00 de multa."
elif [ $userspeed -eq $speedlmt ];
then
echo "Mas bah tchê! Tu ta no limite do limite! Te toca meu! Cuidado no volante!"
elif [ $userspeed -lt $speedlmt ];
then
echo "Olowko meu! Tu não tava muito rapido não meu nego! Não tens que pagar multa dessa vez!"
fi