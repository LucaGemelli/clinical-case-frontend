export interface Anamnese {
    
    id: number;
    nome: string;
    informante: string;
    sexo: string;
    dataNascimento: Date;
    quantidadeFilhos: number;
    estadoCivil: string;
    profissao: string;
    endereco: string;
    naturalidade: string;
    motivoInternacao: string;

    doencasGraveCronica ?: string;
    doenca ?: string;
    doencaInfancia ?: string;
    medicamentoUsoDomiciliar ?: string;
    alergiaMedicamentos ?: string;
    alergiaAlimentares ?: string;
    alergiaOutras ?: string;
    tratamentosAnteriores ?: string;
    cirurgias ?: string;
    historicoObstetrica ?: string;
    historicoFamiliar ?: string;
    historicoCancer ?: string;
    fumante ?: string;
    alcool ?: string;
    drogas ?: string;
    condicaoMoradiaSaneamentoBasico ?: string;
    saneamentoBasico ?: string;
    atividadeFisica ?: string;
    repouso ?: string;
    habitosHigieneBanho ?: string;
    habitosHigieneBucal ?: string;
    habitoAlimentares ?: string;
    equilibrioEmocional ?: string;
    eliminacoesUrinarias ?: string;
    eliminacoesIntestinais ?: string;
    atividadeSexual ?: string;
    problemaSaude ?: string;
    peso ?: number;
    altura ?: number;
}