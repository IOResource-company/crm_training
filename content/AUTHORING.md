# Authoring a module

One file per module: `content/<slug>.js`, listed in `_order.json`.
`build/assemble.mjs` splices them into `IOR-CRM-Training.html`; the daily email
script then reads that file. Run `node build/assemble.mjs` after any edit.

## The file is one bare object literal

No `const`, no `export`, no wrapping array, no trailing comma, **no comments**.
The whole file is exactly:

```js
{
  slug: "pipeline",
  ...
}
```

### Hard syntax rules

These exist because the email job extracts `DATA` with a brace scanner and
evaluates it in a bare VM context:

- **No comments anywhere** — `//` and `/* */` both break extraction.
- **No backticks.** Use `"double quotes"`, or `'single'` when the text contains
  double quotes. Never a template literal.
- **No expressions** — no concatenation, no variables, no function calls. Every
  value is a literal.
- `slug` must equal the filename.

## Fields

| Key | Type | Rendered as | Content |
|---|---|---|---|
| `slug` | string | — | kebab-case, matches filename |
| `name` | string | escaped | nav pill + heading, e.g. `"Opportunities & Pipeline"` |
| `track` | `"all"` \| `"sales"` \| `"ops"` | badge | who it's aimed at; `all` = everyone |
| `tagline` | string | escaped | one line under the heading |
| `intro` | HTML string | **raw** | 1–3 `<p>` paragraphs: what this is and why it matters here |
| `shots` | array | — | `{key:"opp-kanban", cap:"What it shows"}` — see Screenshots |
| `howtos` | array | mixed | the core of the module — see below |
| `fields` | `[{k,v}]` | `k` escaped, `v` **raw** | field name → what goes in it |
| `tips` | `[HTML string]` | **raw** | standalone tips; also feeds the email's Tip of the Day |
| `mistakes` | `[{m,fix}]` | `m` escaped, `fix` **raw** | what people do wrong → what to do instead |
| `confirms` | `[string]` | escaped | module-level open questions (see Needs confirmation) |
| `quiz` | `[{q,o,c,e}]` | escaped | `o` = 4 options, `c` = 0-based correct index, `e` = explanation |
| `flashcards` | `[{q,a}]` | escaped | short prompt → short answer |
| `scenarios` | `[{scenario,q,o,c,e}]` | escaped | a situation, then the right call |

### `howtos` entries

```js
{
  title: "Create an opportunity",
  when: "A deal has passed the Screening bar and is worth tracking",
  steps: ["Open the company record first.", "Click ..."],
  shot: {key:"opp-new", cap:"The new opportunity panel"},
  tip: "Name it so the pipeline reads at a glance.",
  important: "Never create an opportunity without a company linked.",
  mistake: "Creating the deal before the company exists.",
  confirm: "Exact label of the button that adds a related opportunity."
}
```

`title`, `when` and `confirm` are escaped — **plain text only**.
`steps[]`, `tip`, `important` and `mistake` are rendered raw — HTML is allowed
and encouraged: `<strong>`, `<em>`, `<code>`, `<a>`. Write `&amp;` for a literal
ampersand in any raw field.

Target per module: **3–5 howtos, 4–8 fields, 6+ quiz, 4+ flashcards, 1–2
scenarios, 2–4 mistakes, 2–3 tips.** The Friday exam draws on the whole quiz
pool, so quiz depth matters.

## Screenshots

Reference a screenshot by key. If `shots/<key>.png` exists it is embedded;
otherwise the guide renders a labelled placeholder box, so it is always safe to
reference one that hasn't been captured yet. Write the `cap` as an instruction
to whoever captures it: *"Companies list with the Sales Rep column visible"*.

## Needs confirmation

The guide documents **our** CRM, not stock Twenty. If you cannot verify
something from the IOR CRM repo, do not write it as fact:

- a question about one how-to → that how-to's `confirm`
- a broader question → the module's `confirms`

Both surface as amber callouts in place *and* in the generated **Items to
Confirm** section. Never soften an unknown into a confident instruction.

## House rules

- Plain English, task-first, aimed at a salesperson or ops colleague — not a
  developer. Short sentences. Second person.
- Use our real names for things: stage names, field names, view names, `salesRep`
  codes. Never substitute generic Twenty behaviour for ours.
- **This repo is public.** Real customer names are fine as examples; spend,
  margin, deal values and any other commercial figures are not.
- No source citations in the module file — those belong in `briefs/<slug>.md`.
