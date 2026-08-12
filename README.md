# qiutingloh.github.io

Academic site for Qiuting Loh, Ph.D. Built with Jekyll and served by GitHub Pages
at <https://qiutingloh.github.io>.

Content lives in YAML data files, so almost every update is a text edit rather
than an HTML change.

## Common edits

| I want to...            | Edit this                                                  |
| ----------------------- | ---------------------------------------------------------- |
| Add a publication       | `_data/publications.yml`                                    |
| Change research blurbs  | `_data/cv.yml` &rarr; `research_interests`                   |
| Add a job or degree     | `_data/cv.yml` &rarr; `experience` / `education`             |
| Update skills, awards   | `_data/cv.yml`                                              |
| Change name, email, links | `_config.yml` &rarr; `author`                              |
| Swap the CV PDF         | Replace `files/QiutingLoh-Academic-CV.pdf`                   |
| Swap the photo          | See below                                                    |

### Adding the profile photo

1. Save the image as `assets/img/profile.jpg` (square, at least 400x400px).
2. In `_config.yml`, change `profile_image` to `/assets/img/profile.jpg`.

The placeholder graphic stays in the repo until then.

### Adding a publication

Copy an existing block in `_data/publications.yml` and fill it in:

```yaml
  - authors: "Loh Q, Someone A, Lim TS"
    title: "Title of the paper"
    venue: "Journal Name"
    detail: "12:345-350"
    year: 2026
    pdf: /files/pubs/2026-journal-name.pdf   # optional
    doi: 10.1000/example                     # optional, bare DOI
    url:                                     # optional, any other link
```

`Loh Q` is bolded automatically. Blank `pdf` / `doi` / `url` fields simply do not
render a button, so it is safe to leave them empty. Publications appear in the
order they are listed in the file, newest first by convention.

To host a paper PDF, drop the file in `files/pubs/` and reference it with the
`pdf:` field.

## Running it locally

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Deploying

Push to `main`. GitHub Pages builds the site automatically; no workflow file is
needed. Settings &rarr; Pages should be set to "Deploy from a branch", branch
`main`, folder `/ (root)`.
