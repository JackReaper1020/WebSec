
# OSINT & Forensics Investigation Report: Letter (TryHackMe)

**Date:** June 29, 2026

**Target:** Historical identification and postal routing recovery via provided digital artifacts.

**Objective:** Uncover the full identity and age of a historical figure referenced in a letter, and recover the destination postal code from a damaged envelope.

---

## 1. Executive Summary

This report details the successful open-source intelligence (OSINT) and forensic analysis of a damaged letter and its contents. By extracting key visual anchors from water-damaged evidence and cross-referencing them with historical French maritime archives, the target's identity was successfully reconstructed. Furthermore, forensic analysis of the envelope's automated routing barcode yielded the exact destination postal code.

---

## 2. Evidence Processing & Initial Extraction

Three primary pieces of evidence were provided for analysis:

### Artifact A: The Envelope (`letter.jpg`)

* **Condition:** Severe water damage, physical tearing.
* **Recovered Text:** Addressed to **"Edouard G."**
* **Organization:** Affiliated with **"SNSM"**. OSINT search identified this as *Société Nationale de Sauvetage en Mer* (French National Society for Sea Rescue).
* **Forensic Detail:** A fluorescent orange indexation barcode (French postal routing code) survived along the bottom right edge.

### Artifact B: The Handwritten Note (`Note.txt`)

* **Constraints Established:**
* The subject of the investigation is Edouard's great-grandfather.
* He "distinguished himself" in a maritime event.
* He was the **youngest member** of his crew (*"benjamin de l'équipe"*).
* He was under the age of 18 (too young for a driver's license).



### Artifact C: The Newspaper Clipping (`Newspaper_clipping.jpg`)

* **Publication:** *L'Ouest-Éclair* (French regional newspaper).
* **Date:** May 24, 1925 (corroborated by a side article questioning if explorer Amundsen had reached the North Pole).
* **Location:** Mention of "côtes du Finistère" (Finistère coast, Brittany, France).
* **Event:** A maritime disaster involving fishing boats and a lifeboat (*"deux bateaux de peche et un canot de sauvetage"*).

---

## 3. OSINT Investigation & Correlation

### Phase 1: Historical Archive Search

The keywords extracted from the newspaper clipping (`L'Ouest-Éclair`, `1925`, `Finistère`, `sauvetage`) were utilized in a targeted search query.

**Result:** The query successfully identified a documented historical event: a severe storm and subsequent lifeboat disaster on May 23, 1925, off the coast of Penmarc'h, France. A complete crew manifest for the lifeboat *Sainte-Barbe* was located on the local historical archive site, KBC Penmarc'h.

### Phase 2: Target Identification

The crew manifest was filtered using the strict constraints established from `Note.txt` and `letter.jpg`:

1. **Surname constraint:** Must start with **"G"** (to match descendant Edouard G.).
2. **Age constraint:** Must be the youngest member of the crew (under 18).

**Result:** The filters eliminated older crewmen (such as Mr. Le Gall) and positively identified a 15-year-old cabin boy (*mousse*).

* **Target Name:** Yves-Marie Gourlaouen
* **Target Age:** 15

---

## 4. Postal Barcode Forensics

The final objective required identifying the exact local SNSM station the letter was destined for. The primary Paris headquarters postal code (75009) was ruled out due to the localized nature of the rescue station.

### Barcode Decoding

The orange bars on the envelope (`letter.jpg`) were analyzed using a French postal barcode cipher.

* **Methodology:** French indexation barcodes must be read and decoded from **right to left**.
* **Correction Applied:** During manual translation, a visual anomaly (an extra `|` bar misread due to damage) was corrected, aligning the extracted code with the Finistère department prefix (`29`).
* **Result:** The decoded bars perfectly translated to the postal code for the coastal town of Penmarc'h.

---

## 5. Final Intelligence Delivered

All intelligence constraints were met. The final flags were constructed and verified:

* **Historical Identity Flag:** `THM{Yves-Marie_Gourlaouen_15}`
* **Destination Postal Code:** `29760`

---

## 6. Lessons Learned

* **Granular Attention to Detail:** In forensics, visual artifacts that appear to be printing errors or standard marks (like the orange routing bars) often hold exact, verifiable data when primary text is destroyed.
* **Data Filtration:** When conducting OSINT on historical archives, success relies on strict adherence to all known constraints. While other names on the manifest (Le Gall) initially looked promising, applying the "youngest member" and "G. initial" rules prevented a false positive.
* **Cipher Orientation:** Always verify the regional reading direction of automated codes (e.g., French postal barcodes reading right-to-left). A single misread bar can derail the entire decryption process.
