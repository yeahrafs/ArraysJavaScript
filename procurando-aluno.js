const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        const [alunos, media] = listaDeAlunosEMedias;

        console.log(`O aluno ${aluno} está cadastrado`)

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`O aluno ${aluno} tem média ${mediaDoAluno}`)
    }
    else{
        console.log("Aluno não encontrado")
    }
}

exibeNomeENota("Ana")