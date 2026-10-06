// @name         Блокировка DevTools при сканировании
// @namespace     http://tampermonkey.net/
// @version      1.0
// @description Блокирует открытие консоли DevTools (F12, Ctrl+Shift+I/J) при сканировании кодов
// @author       Ваше имя
// @match        https://turbo-pvz.ozon.ru/*
// @grant        none
// ==/UserScript==
(function() {
  'use strict';

  function blockDevTools(e) {
    // Блокируем F12
    if (e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
    }
    // Блокируем Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      e.stopPropagation();
    }
    // Блокируем Ctrl+Shift+J (Консоль)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      e.stopPropagation();
    }
    // Блокируем Ctrl+U (Исходный код)
    if (e.ctrlKey && e.key === 'U') {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  // Добавляем обработчик событий
  document.addEventListener('keydown', blockDevTools, true);

  // Опционально: логирование для отладки (можно удалить в продакшене)
  console.log('Tampermonkey: скрипт блокировки DevTools активирован');
})();

