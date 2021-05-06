# malkov_hunter

> Ссылка на макет: 
[https://www.figma.com/file/EJO4OXUOrAiaMGLzvrcyrs/Промежуточное-грейдирование-HTML-%26-CSS%2C-уровень-1?node-id=0%3A1](https://www.figma.com/file/EJO4OXUOrAiaMGLzvrcyrs/%D0%9F%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D0%B3%D1%80%D0%B5%D0%B9%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-HTML-%26-CSS%2C-%D1%83%D1%80%D0%BE%D0%B2%D0%B5%D0%BD%D1%8C-1?node-id=0%3A1)

> Критерии — [https://docs.google.com/spreadsheets/d/1WDrAclv02JgL88pxwg30rTkjuI46LY0-D8cMJnA0PIw/edit?usp=drive_web&ouid=107113610799636664587](https://docs.google.com/spreadsheets/d/1WDrAclv02JgL88pxwg30rTkjuI46LY0-D8cMJnA0PIw/edit?usp=drive_web&ouid=107113610799636664587)

### **Общие технические требования**

1. Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
2. Сетка: определена в макете.
3. Раскладка блоков на странице делается с помощью флексбоксов и гридов.
4. Кроссбраузерность: Chrome, Firefox, Safari
5. Графика не предоставляется и её необходимо вырезать самостоятельно. Правила работы с Figmа тут — [https://htmlacademy.ru/blog/useful/figma](https://htmlacademy.ru/blog/useful/figma)

### Пояснения по макету

1. Необходимо выполнить верстку одной страницы. Без адаптива, делается только десктопная версия. 
2. Минимальная ширина контента — 1110 px. 
Контентная область центрируется и не может быть уже макетной ширины. Фоны, которые упираются в края макета, должны тянуться на всю страницу.
3. Ссылки в шапке (и подвале) сайта — это якорные ссылки, которые ведут на соответствующие разделы лендинга. Кнопка Заказать — это якорь, которая ведет к форме заказа. 

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96beb27c-35a1-4104-b869-73f5dc66c0fa/d4b24933cd.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96beb27c-35a1-4104-b869-73f5dc66c0fa/d4b24933cd.jpg)

4. Это слайдер. Все слайды должны быть сверстаны. Реализация слайдера по желанию исполнителя. 
Стрелки переключения слайдов в крайнем положение становятся недоступными (disable)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e0a03bf-5080-4a0a-8bc3-04d8d5b89111/b5b494ab8f.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4e0a03bf-5080-4a0a-8bc3-04d8d5b89111/b5b494ab8f.jpg)

5. Фильтр товаров 
    - Цена — в поле можно ввести только цифры, минимальное значение - 0, максимальное неорганичено.
    - Расположение — можно выбрать любое
    - Полив и Освещение — можно выбрать только одно значение
    - Клик по кнопке «Показать» отправляет форму
    - Клик по кнопке «Сбросить» сбрасывает настройку фильтров

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2a6da0d-e25d-4f12-8163-da5a2bdcf516/cbc5cf3b7d.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b2a6da0d-e25d-4f12-8163-da5a2bdcf516/cbc5cf3b7d.jpg)

6. Карточки товаров.
    - При наполнении текстом блок с текстом не должен вылезать за границы изображения, кнопка покупки не должна пропадать.
    - Количество товаров может быть любым, оно не должно ломать страницу.
    - При наведение на карточку товара появляется поп-ап с кнопкой Заказать. Кнопка заказать ведет на страницу, которой нет в макете

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35058aa9-b2fe-4f6d-9adc-27cf6c62fcfc/91222a589f.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/35058aa9-b2fe-4f6d-9adc-27cf6c62fcfc/91222a589f.jpg)

7. Форма обратной связи

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fe4069c-fb34-4c56-a64a-240e7c040d73/c97a4d6d8a.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5fe4069c-fb34-4c56-a64a-240e7c040d73/c97a4d6d8a.jpg)

    - Выберите растение — раскрывающийся список. Стилизация на усмотрение исполнителя
    - Ваше имя, телефон, e-mail — поля обязательные для заполнения, валидация по типу формы. В случае неккоретных данных выдает сообщение об ошибки.

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b1d454a-ffab-4534-bbbc-6540f3ecb77a/ade9e0e1fe.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b1d454a-ffab-4534-bbbc-6540f3ecb77a/ade9e0e1fe.jpg)

    - Клик по кнопке «Заказать» отправляет форму
