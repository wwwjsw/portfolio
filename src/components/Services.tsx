const services = [
    { title: "Facebook & Google Ads", description: "Campanhas otimizadas para maximizar conversões." },
    { title: "Criação de Sites", description: "Sites rápidos, responsivos e otimizados para SEO." },
    { title: "E-commerce", description: "Lojas virtuais completas e integradas com pagamento." },
    { title: "Desenvolvimento de Apps", description: "Apps personalizados para Android e iOS." },
    { title: "Landing Pages", description: "Páginas de alta conversão para campanhas." },
    { title: "E-mail Marketing", description: "Automação de e-mails para engajamento e vendas." }
  ];
  
  const Services = () => {
    return (
      <section id="services" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-800">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  