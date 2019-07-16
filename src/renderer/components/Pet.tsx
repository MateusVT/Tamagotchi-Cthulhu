import * as React from "react"
const def = require('../resources/default.gif');
const dirty = require('../resources/dirty.gif');
const eat = require('../resources/eat.gif');
const guilty = require('../resources/guilty.gif');
const happy = require('../resources/happy.gif');
const mad1 = require('../resources/mad1.gif');
const mad2 = require('../resources/mad2.gif');
const sad = require('../resources/sad.gif');
const sleep = require('../resources/sleep.gif');
const washing = require('../resources/washing.gif');



type Props = {}
type State = {


}


class Pet extends React.PureComponent<Props, State> {
    state: State = {}
    public name: String = '';
    public idade: number = 0;
    public felicidade: number = 100.9;
    public alimentação: number = 100.9;
    public saude: number = 100.9;
    public rate: number = 4;
    public felicidadeRate: number = .00005 * this.rate;
    public fomeRate: number = .000045 * this.rate;
    public saudeRate: number = .00002 * this.rate;
    public idadeRate: number = .5;
    public estagio: String = 'baby'
    public estado: String = 'normal'
    public entediado: number = 0;
    public sujeira: number = 0;
    public aux: String = '';//armazena estado antes de colocar para dormir
    render() {
        return <>
            <img src={def} />
            {/* <img src={dirty} /> */}
        </>
    }
    Reset() {
        this.idade = 0;
        this.felicidade = 100;
        this.alimentação = 100;
        this.saude = 100;
        this.estagio = 'baby'
        this.estado = 'normal';
        //<HTMLImageElement>document.getElementById('img').src='Images/idle.gif';
        //document.getElementById('background').muted = false;

    }

    updateStatus() {
        if (this.estado != 'morto' && this.estado != 'dormindo') {
            if (this.felicidade <= 0 || this.saude <= 0 || this.alimentação <= 0) {
                //document.getElementById('background').muted = true;
                //document.getElementById('death').autoplay = true;
                this.estado = 'morto';
                console.log('estado: ' + this.estado)
                //document.getElementById('img').src = 'img/dead.png';
            }
            else if (this.estado == 'normal') {
                if ((this.sujeira >= 500) && (this.estado !== 'sujo')) {
                    this.estado = 'sujo';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sujeira.gif';
                }
                else if ((this.entediado >= 1000) && (this.estado != 'cansado')) {
                    this.estado = 'cansado';
                    console.log('estado: ' + this.estado)
                    // document.getElementById('img').src = 'img/entediado.gif';
                }
                else if ((this.felicidade < 40) && (this.estado != 'triste')) {
                    this.estado = 'triste';
                    console.log('estado: ' + this.estado)
                    // document.getElementById('img').src = 'img/triste.gif';
                }
                else if ((this.saude < 40) && (this.estado != 'doente')) {
                    this.estado = 'doente';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sick.gif';
                }
                else if ((this.alimentação < 40) && (this.estado != 'faminto')) {
                    this.estado = 'faminto';
                    console.log('estado: ' + this.estado)
                    // document.getElementById('img').src = 'img/hungry.gif';
                }
            }
            else if (this.estado == 'sujo' && this.sujeira < 500) {
                if ((this.felicidade >= 40 && this.saude >= 40 && this.alimentação >= 40) && (this.estado != 'normal')) {
                    this.estado = 'normal';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/normal.gif';
                }
                else if ((this.entediado >= 1000) && (this.estado != 'cansado')) {
                    this.estado = 'cansado';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/entediado.gif';
                }
                else if ((this.felicidade < 40) && (this.estado != 'triste')) {
                    this.estado = 'triste';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/triste.gif';
                }
                else if ((this.saude < 40) && (this.estado != 'doente')) {
                    this.estado = 'doente';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sick.gif';
                }
                else if ((this.alimentação < 40) && (this.estado != 'faminto')) {
                    this.estado = 'faminto';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/hungry.gif';
                }
            }
            else if (this.estado == 'cansado' && this.entediado < 1000) {
                if ((this.sujeira >= 500) && (this.estado != 'sujo')) {
                    this.estado = 'sujo';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sujeira.gif';
                }
                else if ((this.felicidade >= 40 && this.saude >= 40 && this.alimentação >= 40) && (this.estado != 'normal')) {
                    this.estado = 'normal';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/normal.gif';
                }
                else if ((this.felicidade < 40) && (this.estado != 'triste')) {
                    this.estado = 'triste';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/triste.gif';
                }
                else if ((this.saude < 40) && (this.estado != 'doente')) {
                    this.estado = 'doente';
                    console.log('estado: ' + this.estado)
                    // document.getElementById('img').src = 'img/sick.gif';
                }
                else if ((this.alimentação < 40) && (this.estado != 'faminto')) {
                    this.estado = 'faminto';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/hungry.gif';
                }
            }
            else if (this.estado == 'triste') {
                if ((this.sujeira >= 500) && (this.estado != 'sujo')) {
                    this.estado = 'sujo';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sujeira.gif';
                }
                else if ((this.felicidade >= 40 && this.saude >= 40 && this.alimentação >= 40) && (this.estado != 'normal')) {
                    this.estado = 'normal';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/normal.gif';
                }
                else if ((this.entediado >= 1000) && (this.estado != 'cansado')) {
                    this.estado = 'cansado';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/entediado.gif';
                }
                else if ((this.saude < 40) && (this.estado != 'doente')) {
                    this.estado = 'doente';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sick.gif';
                }
                else if ((this.alimentação < 40) && (this.estado != 'faminto')) {
                    this.estado = 'faminto';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/hungry.gif';
                }
            }
            else if (this.estado == 'doente') {
                if ((this.sujeira >= 500) && (this.estado != 'sujo')) {
                    this.estado = 'sujo';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sujeira.gif';
                }
                else if ((this.felicidade >= 40 && this.saude >= 40 && this.alimentação >= 40) && (this.estado != 'normal')) {
                    this.estado = 'normal';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/normal.gif';
                }
                else if ((this.felicidade < 40) && (this.estado != 'triste')) {
                    this.estado = 'triste';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/triste.gif';
                }
                else if ((this.entediado >= 1000) && (this.estado != 'cansado')) {
                    this.estado = 'cansado';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/entediado.gif';
                }
                else if ((this.alimentação < 40) && (this.estado != 'faminto')) {
                    this.estado = 'faminto';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/hungry.gif';
                }
            }
            else if (this.estado == 'faminto') {
                if ((this.sujeira >= 500) && (this.estado != 'sujo')) {
                    this.estado = 'sujo';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sujeira.gif';
                }
                else if ((this.felicidade >= 40 && this.saude >= 40 && this.alimentação >= 40) && (this.estado != 'normal')) {
                    this.estado = 'normal';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/normal.gif';
                }
                else if ((this.felicidade < 40) && (this.estado != 'triste')) {
                    this.estado = 'triste';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/triste.gif';
                }
                else if ((this.entediado >= 1000) && (this.estado != 'cansado')) {
                    this.estado = 'cansado';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/entediado.gif';
                }
                else if ((this.saude < 40) && (this.estado != 'doente')) {
                    this.estado = 'doente';
                    console.log('estado: ' + this.estado)
                    //document.getElementById('img').src = 'img/sick.gif';
                }
            }
        }
    }




    Alimentar() {
        if (this.estado != 'morto' && this.estado != 'dormindo') {
            this.alimentação += 20;
            this.felicidade += 5;
            this.updateStatus();
        }
    }
    Limpar() {
        if (this.estado != 'morto' && this.estado != 'dormindo') {
            this.saude += 20;
            this.felicidade -= 10;
            this.sujeira = 0;
            this.updateStatus();
        }

    }

    Play() {
        if (this.estado != 'morto' && this.estado != 'dormindo') {
            this.felicidade += 10;
            this.felicidade -= 20;
            this.entediado += 10;
            this.updateStatus();
        }
        console.log("PRINT Play BUTTON")

    }

    Cura() {
        if (this.estado != 'morto' && this.estado != 'dormindo') {
            this.saude += 10;
            this.updateStatus();
        }
    }

    Dormir() {
        if (this.estado != 'dormindo' && this.estado != 'morto') {
            this.aux = this.estado;
            this.estado = 'dormindo';
            //document.getElementById('img').src = 'img/sleeping.gif';
        } else if (this.estado != 'morto') {
            this.estado = this.aux;
            //document.getElementById('img').src = 'img/'+ aux +'.gif';
        }
    }

    update() {
        console.log("estado: " + this.estado)
        this.sleep(1000);
        this.idade += this.idadeRate;
        // máquina de estados do vpet
        if (this.estado == 'normal') {
            //atualiza itens de status (versão 'muito simples')
            this.felicidade -= this.felicidadeRate * 200;
            this.alimentação -= this.fomeRate * 200;
            this.saude -= this.saudeRate * 200;
            this.entediado++;
            this.sujeira++;
            // atualiza estados
            this.updateStatus();
        }
        if (this.estado == 'triste') {
            //atualiza itens de status (versão 'muito simples')
            this.felicidade -= this.felicidadeRate * 200 * 1.5;
            this.alimentação -= this.fomeRate * 200;
            this.saude -= this.saudeRate * 200 * 1.5;
            this.entediado++;
            this.sujeira++;
            // atualiza estados
            this.updateStatus();
        }
        if (this.estado == 'doente') {
            //atualiza itens de status (versão 'muito simples')
            this.felicidade -= this.felicidadeRate * 200;
            this.alimentação -= this.fomeRate * 200 * 1.2;
            this.saude -= this.saudeRate * 200 * 1.5;
            this.entediado++;
            this.sujeira++;
            // atualiza estados
            this.updateStatus();
        }
        if (this.estado == 'faminto') {
            //atualiza itens de status (versão 'muito simples')
            this.felicidade -= this.felicidadeRate * 200 * 1.5;
            this.alimentação -= this.fomeRate * 200 * 1.5;
            this.saude -= this.saudeRate * 200 * 1.5;
            this.entediado++;
            this.sujeira++;
            // atualiza estados
            this.updateStatus();
        }
        if (this.estado == 'cansado') {
            //atualiza itens de status (versão 'muito simples')
            this.felicidade -= this.felicidadeRate * 200 * 1.8;
            this.alimentação -= this.fomeRate * 200 * 1.5;
            this.saude -= this.saudeRate * 200 * 2;
            this.entediado++;
            this.sujeira++;
            // atualiza estados
            this.updateStatus();
        }
        if (this.estado == 'dormindo') {
            this.felicidade -= this.felicidadeRate * 200;
            this.alimentação -= this.fomeRate * 200;
            this.saude -= this.saudeRate * 200;
            this.entediado--;
            this.sujeira++;
        }

        //updateScreen();
        //localSave();


    }
    sleep(milliseconds: number) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
}

export default Pet
