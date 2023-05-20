# Cvičení: Dotaz POST

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 1. Chat

V tomto cvičení si vytvoříte vlastní chatovací aplikaci.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/daweb/js2/posilani-dat/cv-post/cvlekce%3Echat/vysledek.png)

- Pro rychlejší vytvoření základní struktury použijte příkaz níže:

```javascript
npm init kodim-app@latest chat html-css-js
```

- Do HTML přidejte formulář s jedním textovým políčkem pro uživatelovu zprávu a tlačítkem pro odeslání.

- V JavaScriptu přidejte posluchač události `submit` na formulář. V jeho obsluze zamezte výchozímu odeslání formuláře (`preventDefault`).

Obsah textového políčka zašlete na chatovací server.

**Parametry pro zaslání zprávy**
Endpoint: `https://czechichat.deno.dev/api/send-message`
Metoda: `POST`
Hlavička: `Content-Type: application/json`
Tělo: JSON objekt s vlastností `message` obsahující text zprávy

V JavaScriptu by odeslání zprávy mohlo vypadat následovně:

```javascript
fetch('https://czechichat.deno.dev/api/send-message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Ahoj. Toto je moje první zpráva.',
  }),
});
```

Ověřte si, že vaše zpráva se propsala i do chatovacího serveru na adrese [czechichat.deno.dev](https://czechichat.deno.dev/).

- Po odeslání formuláře uživateli vymažte obsah políčka, aby měl prostor pro zprávu novou.

- K formuláři do HTML přidejte ještě jedno textové políčko na jméno. Nezapomeňte obě políčka označit štítkem `<label>`.

- Při odesílání formuláře přidejte do požadavku na server do těla zprávy ještě jméno jako vlastnost `name`.

Tělo by mohlo vypadat takto:

```javascript
{
	name: 'Karel',
	message: 'Toto je moje první zpráva.',
}
```

Obsah políčka se jménem uživateli nemažte. Pravděpodobně ho bude chtít použít i pro další zprávu.

- Opět si ověřte, že se zpráva propisuje do serveru a tentokrát i se jménem.

**Bonusy**
- Přidejte výpis zpráv ze serveru například jako odrážkový seznam ve tvaru `Jméno: text zprávy (datum)`.

**Parametry pro získání historie zpráv**
Endpoint: `https://czechichat.deno.dev/api/list-messages`
Metoda: výchozí `GET`
Hlavičky: výchozí
Tělo: žádné
Stahujte zprávy v pravidelných intervalech každé tři sekundy, aby uživatel viděl, když dorazí nová.

- Stránku nastylujte.