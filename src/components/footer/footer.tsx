import { useList } from "@/context/listContext";

export function Footer() {
  const { list } = useList();

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const calculateTotal = () => {
    let total = 0;
    for (let item of list) {
      total += item.price * item.amount;
    }
    return formatCurrency(total);
  };
  return (
    <footer className="fixed flex justify-between w-full bottom-0 bg-[#17171A] py-3 px-6 border-[#252529] border-solid border-t ">
      <h2 className="font-bold text-sm text-[#AFABB6] ">Valor total</h2>
      <h3 className="font-bold text-sm text-[#AFABB6] ">{calculateTotal()}</h3>
    </footer>
  );
}
