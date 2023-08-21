const Proceso = () => {
  return (
    <span className="text-secondary font-bold">Proceso</span>
  );
};

const FinProceso = () => {
  return (
    <span className="text-secondary font-bold">FinProceso</span>
  );
};

const Escribir = () => {
  return (
    <span className="text-error font-bold">Escribir</span>
  );
};

const Imprimir = () => {
  return (
    <span className="text-error font-bold">Imprimir</span>
  );
};

const Leer = () => {
  return (
    <span className="text-warning font-bold">Leer</span>
  );
};

const Mostrar = () => {
  return (
    <span className="text-warning font-bold">Mostrar</span>
  );
};

const Definir = () => {
  return (
    <span className="text-info font-bold">Definir</span>
  );
};

const Esperar = () => {
  return (
    <span className="text-info font-bold">Esperar</span>
  );
};

const Limpiar = () => {
  return (
    <span className="text-limpiar font-bold">Limpiar</span>
  );
};

interface Props {
  id?: string;
  justify?: string;
  children: React.ReactNode;
}

const Variable:React.FC<Props> = ({children}) => {
  return (
    <span className="text-success font-bold">
      {children}
    </span>
  );
}

const Si = () => {
  return (
    <span className="text-success font-bold">
      Si
    </span>
  );
}

const SiNo = () => {
  return (
    <span className="text-success font-bold">
      SiNo
    </span>
  );
}

const FinSi = () => {
  return (
    <span className="text-success font-bold">
      FinSi
    </span>
  );
}

const Para = () => {
  return (
    <span className="text-success font-bold">
      Para
    </span>
  );
}

const Entonces = () => {
  return (
    <span className="text-success font-bold">
      Entonces
    </span>
  );
}

const FinPara = () => {
  return (
    <span className="text-success font-bold">
      FinPara
    </span>
  );
}

const Hasta = () => {
  return (
    <span className="text-success font-bold">
      Hasta
    </span>
  );
}

const Hacer = () => {
  return (
    <span className="text-success font-bold">
      Hacer
    </span>
  );
}

const Dimension = () => {
  return (
    <span className="text-success font-bold">
      Dimension
    </span>
  );
}

export function Suma(){
  return (
    <div className="mockup-code text-xs">
      <pre data-prefix=">">
        <code><Proceso/> Suma</code>
      </pre>
      <pre className="mt-3" data-prefix=">">
        <code><Escribir/> &quot;Ingrese el primer numero:&quot;</code>
      </pre>
      <pre data-prefix=">">
        <code><Leer/> &quot;A&quot;</code>
      </pre>
      <pre className="mt-3" data-prefix=">">
        <code><Escribir/> &quot;Ingrese el segundo numero:&quot;</code>
      </pre>
      <pre data-prefix=">">
        <code><Leer/> &quot;B&quot;</code>
      </pre>
      <pre className="mt-3" data-prefix=">">
      <code><Escribir/> &quot;El resultado es: &quot;, <Variable>C</Variable></code>
      </pre>
      <pre className="mt-3" data-prefix=">">
        <code><FinProceso/></code>
      </pre>
    </div>
  );
};

