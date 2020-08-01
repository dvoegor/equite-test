# Тестовое задание Equite

## Структура проекта
```
equite-test
└── content
    └── root
        └── first.txt
        └── second.txt
└── src
    └── data
        └── data.controller.spec.ts
        └── data.controller.ts
        └── data.service.spec.ts
        └── data.service.ts
```

## Получение содержимого файла по его названию
- Метод: GET
- Путь: /data/{id}
- Формат ответа: **text/html**

Пример запросов через Postman: 

- `GET /data/first.txt `
- `GET /data/second.txt `

Пример ответа (_first.txt_): 
```text
At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.
```

## Ошибка отсутствия файла
Пример запросов через Postman: 

- `GET /data/third.txt`
- `GET /data/any.txt`
- `GET /data/some.txt`

Ответ: 
```text
No such file
```

## Код программы

_`data.controller.ts`_
```javascript
@Get(':file')
    getContent(@Param('file') file): string {
        return this.dataService.getFileContent(file)
    }
```


_`data.service.ts`_
```javascript
getFileContent(file): string {
    const filePath: string = path.join(__dirname, '..', '..', 'content', 'root', `${file}`)
    if (fs.existsSync(filePath)) {
        const fileContent: string = fs.readFileSync(filePath);
        return `${fileContent}`
    } else {
        return 'No such file'
    }
}
```
## Тесты
_`data.service.spec.ts`_
```javascript
  let firstFileContent: string = 'At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.\n';
  let secondFileContent: string = 'She literature discovered increasing how diminution understood. Though and highly the enough county for man. Of it up he still court alone widow seems. Suspected he remainder rapturous my sweetness. All vanity regard sudden nor simple can. World mrs and vexed china since after often.\n';
  let errorMessage = 'No such file';

  describe('getFileContent', () => {
    
    // ✅ Проходит
    it("should return content of the 'first.txt' file", () => {
      expect(service.getFileContent('first.txt')).toBe(firstFileContent);
    });

    // ✅ Проходит
    it("should return content of the 'second.txt' file", () => {
      expect(service.getFileContent('second.txt')).toBe(secondFileContent);
    });

    // ✅ Проходит
    it("should return error message", () => {
      expect(service.getFileContent('third.txt')).toBe(errorMessage);
    });
  });
```
