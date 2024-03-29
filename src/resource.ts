export const resource = {
  componentComunication: {
    title: 'Comunicação entre componentes',
    context: [
      {
        type: 'html',
        content: `
          <div>
            <p>
              No Angular, os componentes são como peças de um quebra-cabeça que juntas formam sua aplicação. Às vezes, essas
              peças
              precisam conversar umas com as outras. Aqui estão as duas maneiras principais de fazer isso:
            </p>
          </div>
        `,
      },
      {
        type: 'html',
        content: `
          <div>
      <h2>Comunicação de pai para filho com <strong style="color: var(--tui-info-fill);">@Input</strong></h2>
      <p>
        Imagine que você tem uma caixa de correio em cada componente. Outros componentes podem colocar cartas nessa
        caixa de
        correio, que contêm informações. O componente "recebe" essas informações e pode usá-las para mostrar coisas
        diferentes.
        Isso é como passar notas para os colegas de classe.
      </p>
      <p>
        No código, você define um "Input" em um componente filho para que ele possa aceitar informações de um componente
        pai.
        Por exemplo:
      </p>
    </div>
        `,
      },
      {
        type: 'html',
        content: `
          <div>
      <pre>
        <code>
        `,
      },
      {
        type: 'text',
        content: `
          @Input() nome: string;
        `,
      },
      {
        type: 'html',
        content: `</code>
      </pre>
    </div>
        `,
      },
      {
        type: 'html',
        content: `
           <div>
      <p>E no template do componente pai, você coloca essas informações no componente filho:</p>
    </div>
        `,
      },
      {
        type: 'html',
        content: `
            <div>
      <pre>
        <code>
        `,
      },
      {
        type: 'text',
        content: `
            <app-filho [nome]="nomeDoPai"></app-filho>
        `,
      },
      {
        type: 'html',
        content: `
           </code>
      </pre>
    </div>
        `,
      },
    ],
  },
};
