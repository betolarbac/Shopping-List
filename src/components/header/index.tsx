import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { useList } from "@/context/listContext";

interface List {
  id: number;
  title: string;
  price: number;
  amount: number;
  category: string;
}

export function Header() {
  const { list, setList } = useList();
  const [inputTitle, setInputTitle] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputCategory, setInputCategory] = useState('');

  useEffect(() => {
    const storedListString = localStorage.getItem('list');
    if (storedListString) {
      setList(JSON.parse(storedListString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const addList = () => {
    if (inputTitle.trim() !== '' && inputPrice.trim() !== '' && inputAmount.trim() !== '' && inputCategory.trim() !== '') {
      const newList: List = {
        id: Date.now(),
        title: inputTitle,
        price: parseFloat(inputPrice),
        amount: parseFloat(inputAmount),
        category: inputCategory
      };

      setList(prevList => [...prevList, newList]);
      setInputTitle('');
      setInputPrice('');
      setInputAmount('');
      setInputCategory('');
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
                <Button className="bg-[#7450AC] hover:bg-[#523480] rounded-full p-2 w-10 h-10">
                  <Plus className="w-6 h-6" />
                </Button>
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

                      <div className="grid w-[140px] max-w-sm items-center gap-1.5">
                        <Label className="text-xs text-title-gray-200">
                          Categoria
                        </Label>

                        <Select  onValueChange={setInputCategory}>
                          <SelectTrigger className="w-[140px] bg-[#111112] border-[#252529] border-solid text-white">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Categoria</SelectLabel>
                              <SelectItem value="Padaria">Padaria</SelectItem>
                              <SelectItem value="Legume">Legume</SelectItem>
                              <SelectItem value="Carne">
                              Carne
                              </SelectItem>
                              <SelectItem value="Fruta">Fruta</SelectItem>
                              <SelectItem value="Bebida">
                              Bebida
                              </SelectItem>
                              <SelectItem value="Geral">
                                Geral
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <DrawerFooter className="p-4">
                    
                    <Button onClick={addList} className="bg-[#7450AC] hover:bg-[#523480]">
                      Salvar
                    </Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="max-w-3xl hidden lg:flex">
          <form action="" className="flex gap-3 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-xs text-title-gray-200" htmlFor="text">
                Item
              </Label>
              <Input
                type="text"
                id="name"
                className="bg-[#111112] border-[#252529] border-solid text-white w-80"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                className="text-xs text-title-gray-200"
                htmlFor="quantidade"
              >
                Quantidade
              </Label>

              <Input
                type="number"
                id="quantidade"
                className="bg-[#111112] border-[#252529] border-solid text-white w-20"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-xs text-title-gray-200" htmlFor="Valor">
                Valor
              </Label>

              <Input
                type="number"
                id="valor"
                className="bg-[#111112] border-[#252529] border-solid text-white w-20"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-xs text-title-gray-200">Categoria</Label>
              <Select>
                <SelectTrigger className="w-[180px] bg-[#111112] border-[#252529] border-solid text-white">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categoria</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <Button className="bg-[#7450AC] hover:bg-[#523480] rounded-full p-2 w-10 h-10">
              <Plus className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
