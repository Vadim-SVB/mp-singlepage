<template>
    <section class="bg-black relative overflow-hidden h-screen">
        <img src="img/img_1.jpg" class="absolute h-full w-full object-cover backdrop-filter backdrop-brightness-0"/>
        <article class="h-full py-0 px-4 2xl:px-8 flex flex-col relative content-center bg-black bg-opacity-50 overflow-y-auto text-sm md:text-xl text-white break-words ">
            <div class="h-1/5"></div>
            <div class="h-2/5 md:h-3/5 flex flex-wrap flex-col justify-evenly">
                <div class="h-full md:w-1/2 lg:w-3/5 text-base md:text-xl lg:text-2xl 2xl:text-3xl flex-grow flex flex-col pr-3 justify-center">
                    <p class="mb-5 mt-5">Наша компания Модуль Панель является производителем модульных панелей, домокомплектов котеджей из утепленных железобетонных стеновых панелей. </p> 
                    <p>Все элементы будущих котеджей изготавливаются в заводских условиях имеют ровную геометрию, а погодные условия не влияют на качество и скорость производства изделий.</p> 
                    <p class="hidden md:block mb-5 mt-5">Дополнительные издержки сведены к минимуму, а значит Вы получите лучшую цену и превосходное качество</p> 
                </div>
                <form class="h-full md:w-1/2 lg:w-2/5 max-w-min hidden md:flex flex-col flex-grow-0 justify-between border border-yellow-200 bg-black bg-opacity-40 filter backdrop-filter backdrop-blur-lg filter drop-shadow-sm ">
                    <button class="w-full h-16 sm:text-lg transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-b-2 border-yellow-200 text-yellow-200 bg-black bg-opacity-30">Расчет строительства</button>
                    <input type="email" class="mx-3 bg-transparent border-b border-yellow-200 placeholder-yellow-400 placeholder-opacity-50 appearance-none focus:outline-none  focus:border-b focus:border-t " placeholder="Ваш Email">
                    <input type="text" class="mx-3 bg-transparent border-b border-yellow-200 placeholder-yellow-400 placeholder-opacity-50  appearance-none" placeholder="Имя и Фамилия">
                    <input type="tel" class="mx-3 bg-transparent border-b border-yellow-200 placeholder-yellow-400 placeholder-opacity-50   appearance-none" placeholder="Номер телефона">
                    <div class="relative px-3  h-1/4 w-full" >
                        <textarea class="h-full w-42 form-textarea bg-transparent border-b border-yellow-200 placeholder-yellow-400 placeholder-opacity-50 appearance-none" name="text-msg" id="text-msg" ></textarea>
                        <label class="absolute bottom-1 left-3  text-yellow-400 text-opacity-50" for="text-msg">Текст сообщения:</label>
                    </div>
                    <button class="w-full h-16 sm:text-lg transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-t-2 border-yellow-200 text-yellow-200 bg-black bg-opacity-30">Отправить сообщение</button>
                </form>
                
            </div>
            <div class="h-2/5 md:h-1/5 flex flex-wrap">

                    <div class="w-1/2 h-2/5 flex flex-col md:hidden items-center justify-center">
                        <button class="w-11/12 h-2/3 sm:text-lg transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-50">Написать сообщение</button>
                    </div>
                    <div class="w-1/2 h-2/5 flex flex-col md:hidden items-center justify-center">
                        <button class="w-11/12 h-2/3 sm:text-lg transition ease-in duration-200 hover:border-yellow-200 hover:text-yellow-200 border-2 border-yellow-400 text-yellow-400 bg-black bg-opacity-50">Расчет строительства</button>
                    </div>

                    <footer class="w-full h-3/5 md:h-full text-sm flex flex-row items-center justify-center">
                        <div class="w-3/5 lg:w-7/12 flex flex-col md:text-xl">
                        <h3>ООО МОДУЛЬ ПАНЕЛЬ</h3>
                        <address>220011 Минск, ул. Ольшевского, <br> дом 10, офис&nbsp;377</address>
                        
                        </div>
                        <div class="w-2/5 lg:w-5/12 flex flex-col text-right lg:text-center">
                            <a href="mailto:modulpanel@gmail.com" class="text-xs md:text-xl md:tracking-tight">modulpanel@gmail.com</a>
                            <a href="tel:+375447899978" class="text-xs md:text-xl tracking-widest">+375(44) 78-999-78</a>
                            <a href="tel:+375447855578" class="text-xs md:text-xl tracking-widest">+375(44) 78-555-78</a>
                        </div>
                    </footer>
                </div>
            
        </article>
    </section>
</template>
<script>
export default {
  name: "ContactPage",
}
</script>