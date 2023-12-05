import React from "react";
import { AiFillTool, AiOutlineFileText } from "react-icons/ai";
import { IoLogoApple } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaGasPump } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import ShowMore from '@/components/showMore'
const SERVICES = [
  {
    titulo: "Facturación Electrónica",
    descripcion:
      "Transforma tu gestión financiera con nuestra Facturación Electrónica. Simplifica el proceso de facturación y mantén un registro preciso de todas tus transacciones. ¡La eficiencia nunca fue tan elegante!",
    icon: <AiOutlineFileText alt='icono de factura' className="text-5xl text-white mb-8 mx-auto" />,
  },
  {
    titulo: "Rastreo Satélital",
    descripcion:
      "Monitorea y administra fácilmente tu fuerza móvil de trabajadores. Ten una vista de 360º en casi tiempo real de las maniobras diarias de tu flota, para reducir costos, aumentar la productividad, estar al día con el mantenimiento del vehículo y sacar el máximo provecho a cada día de trabajo.",
    icon: <BiMap alt='icono de gps' className="text-5xl text-white mb-8 mx-auto " />,
  },
  {
    titulo: "Control de Combustible",
    descripcion:
      "Optimiza tu consumo de combustible con nuestro sistema de Control de Combustible. Reduzca costos, maximice la eficiencia y mantén tus operaciones en marcha.",
    icon: <FaGasPump alt='icono de bomba de compustible' className="text-5xl text-white mb-8 mx-auto " />,
  },
  {
    titulo: "Control de Viajes",
    descripcion:
      "De punto A a punto B tu entrega segura! Con nuestra app podrás monitorear en tiempo real el estatus de tus viajes. Podrás ahorrar tiempo, dinero y operación logística con nuestra tecnología. Además, notifica a tus clientes sobre el estatus de sus traslados hasta la entrega.",
    icon: (
      <HiOutlineLocationMarker alt='icono de gps' className="text-5xl text-white mb-8 mx-auto" />
    ),
  },
  {
    titulo: "App para Operadores",
    descripcion: "Conoce los beneficios de nuestra tecnología, tus operadores podrán descargar nuestra app disponible en sistema operativo ANDROID o iOS. Podrás visualizar en tiempo real cada detalle de los viajes realizados. - Horario de carga- Horario de salida - Fotos - Horario de llegada  -Horario de descarga",
    icon: <IoLogoApple alt='icono del logo de apple' className="text-5xl text-white mb-8 mx-auto" />,
  },
  {
    titulo: "Control de Mantenimientos",
    descripcion: "Sabemos que el combustible es uno de los rubros más costosos en la gestión de la flota, y por eso hemos desarrollado un módulo que te permitirá analizar detalladamente y desde diferentes puntos de vista su rendimiento y costo. Analiza el rendimiento de tus usuarios con el paso del tiempo. Observa las tendencias importantes de cada usuario o de tu flota entera. Nuestro panel personalizable te facilita revisar tu progreso comparado con tu indicador KPI o tus presupuestos, con el análisis instantáneo que te ofrece nuestra app. ¡Conócenos! ***Si usas el módulo  de viajes, integra la liquidación de Combustible con los gastos de viaje",
    icon: <AiFillTool alt='icono de logo de mantenimiento' className="text-5xl text-white mb-8 mx-auto " />,
  },
];
const Features = () => {
  return (
    <section className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px] container mx-auto" id="caracteristicass">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mb-12 lg:mb-20 max-w-[800px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Caracteristicas
              </span>
              <h2 className=" font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4 font-title">
              Tu socio en el camino a la excelencia operativa
              </h2>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 text-center gap-8">
          {SERVICES.map((service, index) => (
            <div
              className="mb-12 p-8 bg-primary rounded-2xl text-white flex flex-col items-center justify-center"
              key={index}
            >
              {service.icon}
              <h4 className="font-bold text-2xl text-dark mb-3 ">
                {service.titulo}
              </h4>
              <ShowMore description={service.descripcion} title={service.titulo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
