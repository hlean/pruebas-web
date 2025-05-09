const Mission = () => {
  return (
    <section className="py-20 bg-darkBlue text-white relative overflow-hidden">
      <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">NUESTRA MISIÓN</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-lg text-white/90 mb-10 leading-relaxed">
            Ofrecemos servicio de transporte de mercadería confiable y eficiente para empresas que necesitan enviar o recibir paquetes en el día.
            Buscamos ser el nexo entre nuestros clientes, uniendo Montevideo y Ciudad de la Costa.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-terracotta mb-2">+300</div>
              <p className="text-white/80">Envíos mensuales</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-terracotta mb-2">98%</div>
              <p className="text-white/80">Entregas a tiempo</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-terracotta mb-2">+100</div>
              <p className="text-white/80">Clientes satisfechos</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Mission;