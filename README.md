# 🪻 Lavender Lifeline Archive

> *This is not a lab for gaming servers. This is a lab with the hope to protect life-saving research.*

An independently operated digital archive preserving **transgender healthcare research** and **HIV/AIDS medical literature** — built in a bedroom rack, maintained with community in mind.

---

## What this is

The Lavender Lifeline Archive is a community infrastructure project started by a trans technologist who watched institutions deprioritize, defund, and quietly delete the research that keeps marginalized people alive and informed.

The internet forgets. Institutions fail. Some of us can't afford to lose this information.

So we built the infrastructure ourselves.

---

## What we preserve

**Transgender health research**
- HRT protocols — feminizing and masculinizing
- Transition outcomes literature
- Endocrinology and pharmacology data
- Surgical outcomes and quality of life studies
- WPATH Standards of Care documents
- Mental health and co-occurring condition research

**HIV/AIDS medical literature**
- Antiretroviral therapy (ART) regimen data
- PrEP and PEP efficacy research
- Epidemiology and demographic impact studies
- Historical epidemic documentation (pre-treatment era)
- HIV + trans health intersectionality research

---

## Infrastructure

Built on real hardware with enterprise-grade redundancy:

| Component | Details |
|---|---|
| Primary storage | TrueNAS SCALE — Venus pool (RAIDZ1, 4×2TB) |
| Backup storage | Terra pool (RAIDZ2, 8×1TB) — nightly ZFS replication |
| Remote access | Tailscale mesh VPN — no exposed ports |
| Network | OPNsense firewall (in deployment) — VLAN-segmented |
| Power | CyberPower UPS — battery-backed critical infrastructure |

No cloud dependency. No corporate control. Data lives on hardware we own.

---

## Project status

- ✅ Venus pool — online and healthy
- ✅ Venus → Terra replication — active (nightly)
- 🔄 Archive seeding — in progress
- 🔄 OPNsense VLAN migration — pending
- 📋 Offsite encrypted backup — planned

---

## How to help

- **Share the mission** — every share reaches someone who needs this
- **Contribute sources** — open an issue with research you think should be preserved (DOI, journal, publication year)
- **Follow along** — watch this repo for updates as the archive grows
- **Support the infrastructure** — hardware, drives, and hosting aren't free

---

## Sourcing policy

All archived material is sourced from:
- PubMed / NCBI open access publications
- PLoS Medicine, BMC series, and other open-access journals
- Official WPATH Standards of Care releases
- CDC and public health agency publications
- Open-access clinical trial data

We do not archive paywalled content. We preserve what the community is legally entitled to access — and make sure it stays accessible.

---

## Contact

Open an issue on this repo or reach out via the website.

---

*Built with intention. Maintained with community in mind.*

🏳️‍⚧️ 🩸 🪻
