import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Plus } from "lucide-react";
import { useState, } from "react";
import { useList } from "@/context/listContext";

interface List {
  id: number;
  title: string;
  price: number;
  amount: number;
}

export function Header() {
  const { setList } = useList();
  const [inputTitle, setInputTitle] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputAmount, setInputAmount] = useState('');


  const addList = () => {
    if (inputTitle.trim() !== '' && inputPrice.trim() !== '' && inputAmount.trim() !== '') {
      const newList: List = {
        id: Date.now(),
        title: inputTitle,
        price: parseFloat(inputPrice),
        amount: parseFloat(inputAmount)
      };

      setList(prevList => [...prevList, newList]);
      setInputTitle('');
      setInputPrice('');
      setInputAmount('');
    } 
  };

  
  return (
    <>
      <div className="absolute w-full">
        <img
          src="/banner.png"
          alt="banner"
          className="w-full hidden lg:block"
        />
        <img
          src="/banner_mobile.png"
          alt="banner"
          className="lg:hidden w-full"
        />
      </div>

      <div className="max-w-3xl my-0 mx-auto pt-20 relative">
        <div className="flex justify-between lg:block px-6">
          <h1 className="text-2xl font-bold text-white mb-8">
            Lista de Compras
          </h1>
          
          <div className="lg:hidden">
            <Drawer>
              <DrawerTrigger>
                <div className="bg-[#7450AC] hover:bg-[#523480] rounded-full p-2 w-10 h-10">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              </DrawerTrigger>

                <DrawerContent className="bg-[#0C0C0D] border-none">
                  <div className="max-w-3xl flex py-6">
                    <div className="flex gap-3 items-end flex-wrap px-4">
                      <div className="grid w-full max-w-sm items-center gap-1.5 mb-2 ">
                        <Label
                          className="text-xs text-title-gray-200"
                          htmlFor="text"
                        >
                          Item
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Nome"
                          value={inputTitle}
                          onChange={e => setInputTitle(e.target.value)}
                          className="bg-[#111112] border-[#252529] border-solid text-white"
                        />
                      </div>

                      <div className="grid max-w-sm items-center gap-1.5 flex-1">
                        <Label
                          className="text-xs text-title-gray-200"
                          htmlFor="quantidade"
                        >
                          Quantidade
                        </Label>

                        <Input
                          type="number"
                          id="quantidade"
                          placeholder="0"
                          value={inputAmount}
                          onChange={e => setInputAmount(e.target.value)}
                          className="bg-[#111112] border-[#252529] border-solid text-white "
                        />
                      </div>

                      <div className="grid max-w-sm items-center gap-1.5 flex-1">
                        <Label
                          className="text-xs text-title-gray-200"
                          htmlFor="Valor"
                        >
                          Valor
                        </Label>

                        <Input
                          type="number"
                          id="valor"
                          placeholder="0,00"
                          value={inputPrice}
                          onChange={e => setInputPrice(e.target.value)}
                          className="bg-[#111112] border-[#252529] border-solid text-white "
                        />
                      </div>

                    </div>
                  </div>

                  <DrawerFooter className="p-4">
                    
                    <Button onClick={addList} className="bg-[#7450AC] hover:bg-[#523480]">
                      Salvar
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancelar</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="max-w-3xl hidden lg:flex">
          <div className="flex gap-3 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-xs text-title-gray-200" htmlFor="text">
                Item
              </Label>
              <Input
                 type="text"
                 id="name"
                 placeholder="Nome"
                 value={inputTitle}
                 onChange={e => setInputTitle(e.target.value)}
                className="bg-[#111112] border-[#252529] border-solid text-white w-96"
              />
            </div>

            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label
                className="text-xs text-title-gray-200"
                htmlFor="quantidade"
              >
                Quantidade
              </Label>

              <Input
               type="number"
               id="quantidade"
               placeholder="0"
               value={inputAmount}
               onChange={e => setInputAmount(e.target.value)}
                className="bg-[#111112] border-[#252529] border-solid text-white w-36"
              />
            </div>

            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label className="text-xs text-title-gray-200" htmlFor="Valor">
                Valor
              </Label>

              <Input
              type="number"
              id="valor"
              placeholder="0,00"
              value={inputPrice}
              onChange={e => setInputPrice(e.target.value)}
                className="bg-[#111112] border-[#252529] border-solid text-white w-36"
              />
            </div>

            <Button onClick={addList} className="bg-[#7450AC] hover:bg-[#523480] rounded-full p-2 w-10 h-10">
              <Plus className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
