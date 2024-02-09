import { Checkbox } from "@/components/ui/checkbox";
import { useList } from "@/context/listContext";
import localforage from 'localforage';
import { Trash2 } from 'lucide-react';

export function List() {
  const { list, setList } = useList(); // Agora você pode usar o useList aqui
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleDelete = async (id: number) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    await localforage.setItem('list', newList);
  };

  return (
    <>
      <div className="absolute px-6 w-full flex flex-col gap-2 pb-6 lg:max-w-3xl lg:mx-auto lg:my-0 lg:relative lg:p-0 lg:pr-6 lg:pt-10">
        {list.map((lists) => (
          <div
            key={lists.id}
            className="flex justify-between items-center  bg-[#17171A] p-4 border-[#252529] border border-solid rounded-lg"
          >
            <div key={lists.id} className="flex items-center space-x-2 gap-4">
              <Checkbox className="border-[#A881E6]" />

              <div className="flex flex-col">
                <label className="font-bold text-sm text-[#FBF9FE]">
                  {lists.title}
                </label>
                <p className="flex text-[#AFABB6] text-xs">
                {lists.amount === 1 ? "1 unidade" : `${lists.amount} unidades`}
                </p>
                <p className="flex text-[#AFABB6] text-xs">
                  {formatCurrency(lists.price * lists.amount)}
                </p>
              </div>
            </div>

            <div>
              <button onClick={() => handleDelete(lists.id)}><Trash2 className="text-[#E07B67]"/></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
