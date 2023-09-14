function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const msg = document.querySelector("h3");
    const mes = document.querySelector("#mes").value;
    const dia = document.querySelector("#dia").value;
    const data = "2023"+"/"+mes+"/"+dia;

    if((data>= "2023/05/20")&&(data<= "2023/06/20")){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.jpeg");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Os nativos desse signo não gostam de regras criadas pela sociedade e, definitivamente, são sempre os primeiros a questioná-las. Curioso e bem humorado, tem uma verdadeira vocação para manter um círculo social diverso, com todas as tribos possíveis.";
    }

    else if((data>= "2023/10/23")&&(data<= "2023/11/21")){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Escorpião é um dos signos mais incompreendidos e temidos do zodíaco. Reservados e profundos, os escorpianos têm a intensidade como característica marcante. São pessoas que exalam mistério e poder, e dificilmente deixam-se acessar por completo.";
    }
    
    else if((data>= "2023/03/20")&&(data<= "2023/04/18")){
        texto.innerHTML = "Áries";
        imagem.setAttribute("src","img/aries.webp");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Os arianos e arianas são as pessoas nascidas entre os dias 21 de março e 20 de abril, são a personificação da intensidade. Pessoas do signo de áries também gostam de estar em movimento e viajar a um zilhão de quilômetros por hora. Às vezes, pode ser difícil acompanhar um Áries apaixonado e empoderado.";
    }

    else if((data >= "2023/09/22")&&(data <= "2023/10/22")){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "ara os librianos não há nada melhor do que uma boa companhia, por isso, prezam muito pelas boas amizades e estão sempre rodeados de bons amigos. Amam diversão e liberdade, apesar de serem muito apegados e um pouco dependentes.";
    }

    else if((data >= "2023/04/19")&&(data <= "2023/05/19")){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","img/touro.webp");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "São conhecidas por serem pragmáticas, produtivas, práticas, determinadas, perseverantes e sensuais. Além disso, fazem da realidade seu mundo, gostam de segurança, estabilidade e amam cuidar das suas coisas. ";
    }

    else if((data >= "2023/06/21")&&(data <= "2023/07/21")){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Pertencentes ao grupo do elemento Água, o signo está muito associado à emoção e à intuição. Os nascidos sob o signo de Câncer tendem a ser mais introvertidos e é difícil conhecê-los bem. Eles costumam ser um pouco resistentes para compartilhar o “eu interior” com o resto do mundo e prezam muito pelo espaço pessoal.";
    }

    else if(data<= "2023/01/18"){
        texto.innerHTML = " Capricórnio";
        imagem.setAttribute("src","img/capricornio.webp");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Capricórnio é um signo de terra cardeal e seu planeta regente é Saturno, tornando o Ascendente de Capricórnio autodidata e empreendedor. Eles são ambiciosos, mas não são as primeiras pessoas a seguir os modismos, porque sua influência de Saturno os leva a demorar para confiar e falar.";
    }

    else if((data>= "2023/11/21")&&(data<= "2023/12/20")){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","img/sargitario.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Sagitário faz parte do elemento Fogo e é regido por Júpiter, ou seja, isso significa que o signo foi presenteado com forte instinto de aventura.";
    }

    else if((data>= "2023/08/23")&&(data<= "2023/09/21")){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "O signo de Virgem é muitas vezes visto como perfeccionista e crítico. No entanto, esse jeito de ser pode, muitas vezes, encobrir o medo de lidar com emoções mais profundas. Tarefas e situações são tratadas com eficiência por Virgem, uma vez que o sexto signo do zodíaco curte seguir métodos e deixar a vida mais prática.";
    }
    
    else if((data>= "2023/01/19")&&(data<= "2023/02/17")){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","img/aquario.webp");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Aquário é o décimo primeiro signo do zodíaco, pertence ao elemento Ar e é regido por Urano e Saturno, por isso, os aquarianos são pessoas muito ligadas à tecnologia, desapegados, inteligentes e muito revolucionários.";
    }

    else if((data>= "2023/07/22")&&(data<= "2023/08/22")){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","img/leao.webp");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "O signo de leão é o quinto signo do zodíaco. Seu carisma, magnetismo e poder abalam as estruturas de outros signos. Regido pelo Sol, tem como destaque a energia, vitalidade e facilidade em liderar. Neste post veremos tudo sobre o signo de leão, o signo considerado a majestade do zodíaco.";
    }

    else if((data>= "2023/02/18")&&(data<= "2023/03/19")){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","img/peixes.jpeg");
        imagem.setAttribute("width","300px");
        msg.innerHTML = "Peixes é o décimo segundo - e último - signo do zodíaco. Mutável, é regido pelo planeta Netuno, co-regido pelo planeta Júpiter e rege a Casa 12 do Mapa Astral. O elemento dos piscianos é a água, as pedras são ametista, lápis-lazuli e água-marinha, os aromas são erva-doce e lótus e o número da sorte é o 2.";
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
        msg.innerHTML = "";
    }
}