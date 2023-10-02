export default function ContainerProdutos({ produto, size }) {
  return (
    <div className="px-[27px] pt-[28px] pb-[68px] border-[3px] rounded-[8px] h-[336px] border-black justify-self-center ">
      <div className="border-[3px] h-[240px] border-black justify-self-center ">
        <img
          className="max-w-[100%]"
          src={produto.linkIMG}
          alt={produto.nome}
          
        />
      </div>

      <div className="p-2">
        <h2 className="text-center font-montserrat_alt_semibold text-[32px]">
          {produto.preco}
        </h2>
      </div>
    </div>
  );
}
