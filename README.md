# കണ്ണംവള്ളി എൽ.പി.എസ് — സ്കൂൾ കലോത്സവം 2026

## Independent website setup
1. Create a NEW public GitHub repository named `kannamvalli-kalolsavam-2026` under `nppadmasree` (or change GITHUB_OWNER and GITHUB_REPO in app.js if using another name).
2. Create a NEW Firebase project for this school, so data and admin access remain separate from the first festival. Enable Firestore (production mode) and Email/Password Authentication.
3. In Firestore > Rules, paste `firestore.rules` and publish.
4. In Firebase project settings, register a Web App, then paste its firebaseConfig values into `firebase-config.js`. Keep `export const firebaseConfig = {...};` and do not use npm imports.
5. In Authentication, create an admin email/password user. Copy its UID. In Firestore Data, create collection `admins`, document ID equal to UID, string field `role` with value `admin`.
6. In Firebase Authentication > Settings > Authorized domains, add `nppadmasree.github.io` (or your new Pages domain).
7. Upload `index.html`, `app.js`, `firebase-config.js`, `festival-theme.jpg`, and the `images` folder to the new GitHub repository root. The `.rules` and README files may also be uploaded for reference.
8. GitHub Settings > Pages > Deploy from a branch > `main` > `/ (root)` > Save.
9. Open `https://nppadmasree.github.io/kannamvalli-kalolsavam-2026/`. Sign in and customize the two stages and their events for the new school.
10. For gallery photos, upload JPG/PNG/WebP into GitHub repository `images/` and commit. They will appear when GitHub Pages and GitHub API reflect the update.

## Included features
Two live stages, competition order editing, automatic schedule-change announcements, up to 3 public announcements with clear-all, school/student CSV import, first/second/third prize-only results (up to 10 winners per item), and free GitHub photo gallery. No school points or numeric marks.

## Important
The two stage names and event lists are preloaded from the supplied November 4 programme poster.
Do not overwrite your original repository. Firebase config placeholders must be replaced before login or live updates work.

## Stage schedule from supplied poster
- വേദി 1 — ശ്രുതിലയം (9:30 AM): ഉദ്ഘാടനം, ലളിതഗാനം, പദ്യം ചൊല്ലൽ - മലയാളം, ദേശഭക്തിഗാനം, സംഘഗാനം, മാപ്പിളപ്പാട്ട്.
- വേദി 2 — സ്വരരാഗം (9:30 AM): കഥാകഥനം, അഭിനയഗാനം - മലയാളം, അഭിനയഗാനം - ഇംഗ്ലീഷ്, പദ്യം ചൊല്ലൽ - ഇംഗ്ലീഷ്, മോണോ ആക്ട്, പ്രസംഗം - മലയാളം.

**Important:** If this Firebase project already has stage documents `1` and `2`, their saved content overrides the new defaults. Edit the stages through the admin panel, or update the Firestore stage documents. This package does not delete existing stage 3 data; use a fresh Firebase project for the separate school.
