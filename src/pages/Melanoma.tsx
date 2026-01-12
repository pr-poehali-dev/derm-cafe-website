import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Melanoma() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      navigate('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} currentSection="" />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Malignant Melanoma</h1>
          <p className="text-lg text-muted-foreground">
            Malignant melanoma is an aggressive form of skin cancer that is curable with early diagnosis and treatment. The Derm Café is committed to providing vital information and resources for the diagnosis and treatment of skin cancer. We know the prospect of a cancer diagnosis is stressful, however, early detection and advanced treatment options have shown success in not only curing melanoma but also in extending patients' life expectancy.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* What Is Melanoma */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What Is Malignant Melanoma?</h2>
          <p className="text-muted-foreground">
            Malignant melanoma, often referred to simply as melanoma, is a type of skin cancer that originates from melanocytes, the pigment-producing cells in the skin. Melanocytes are responsible for giving color to the skin, hair, and eyes. When these cells become cancerous, they can grow and multiply uncontrollably, leading to the development of malignant melanoma.
          </p>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What Causes Melanoma?</h2>
          <p className="text-muted-foreground">
            Malignant melanoma is primarily caused by the cumulative effects of ultraviolet (UV) radiation from sunlight or artificial sources like tanning beds. UV radiation damages the DNA in skin cells, including melanocytes, which can lead to the development of cancerous mutations and the formation of malignant melanoma.
          </p>
        </div>
      </section>

      {/* How Is Melanoma Diagnosed */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">How Is Melanoma Diagnosed?</h2>
          <p className="text-muted-foreground mb-6">
            Malignant melanoma is diagnosed through one or more of the following steps:
          </p>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>Clinical Evaluation</strong> - The initial step involves a thorough clinical evaluation of any moles, pigmented lesions, or suspicious areas on the skin. The "ABCDE" criteria (asymmetry, border irregularity, color variation, diameter, and evolving features) may be used to assess the characteristics of moles and lesions.
            </p>
            <p>
              <strong>Dermoscopy</strong> - Dermoscopy is a non-invasive technique that involves using a handheld instrument called a dermatoscope to closely examine skin lesions. It allows for a more detailed evaluation of pigmented lesions and helps identify specific features associated with melanoma.
            </p>
            <p>
              <strong>Skin Biopsy</strong> - If a suspicious lesion is identified during the clinical evaluation, a skin biopsy is typically performed to remove all or a portion of the lesion to be sent for further examination and testing.
            </p>
            <p>
              <strong>Pathological Examination</strong> - The biopsy tissue is sent to a pathology laboratory for a microscopic examination to determine if melanoma is present and the present stage and thickness.
            </p>
            <p>
              <strong>Staging and Imaging</strong> - If melanoma is confirmed, additional tests may be conducted that could include imaging studies such as CT scans, MRI scans, or PET scans to assess whether the cancer has spread to lymph nodes or other parts of the body.
            </p>
            <p>
              <strong>Sentinel Lymph Node Biopsy</strong> - In some cases, a sentinel lymph node biopsy may be recommended to assess whether melanoma has spread to nearby lymph nodes.
            </p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 px-4 bg-accent/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Treatment Options for Melanoma</h2>
          <p className="text-muted-foreground mb-6">
            Treatment options for malignant melanoma depend on the stage of the cancer, the location and size of the tumor, and the patient's overall health. The primary treatment for melanoma is typically surgery, but other therapies shown below may be used alone or in combination to ensure the best outcome.
          </p>
          <div className="space-y-3 text-muted-foreground">
            <p><strong>Wide Local Excision</strong> - This involves removing the melanoma and a margin of healthy tissue surrounding it to confirm that all affected skin tissue below the surface has been removed.</p>
            <p><strong>Sentinel Lymph Node Biopsy</strong> - In cases where melanoma has a higher risk of spreading, a sentinel lymph node biopsy may be performed to assess nearby lymph nodes.</p>
            <p><strong>Lymph Node Dissection</strong> - If cancer has spread to nearby lymph nodes, surgical removal of affected lymph nodes may be necessary.</p>
            <p><strong>Immunotherapy</strong> - Immunotherapy drugs, such as checkpoint inhibitors (e.g., pembrolizumab, nivolumab) and cytokine therapy (e.g., interferon), stimulate the immune system to target and destroy cancer cells.</p>
            <p><strong>Targeted Therapy</strong> - Targeted therapy drugs (e.g., BRAF and MEK inhibitors) are used for melanomas with specific genetic mutations. They block the action of mutated proteins that drive cancer growth.</p>
            <p><strong>Radiation Therapy</strong> - Radiation therapy may be used to treat melanomas that are difficult to remove surgically or as adjuvant therapy after surgery to reduce the risk of recurrence.</p>
            <p><strong>Chemotherapy</strong> - While less common, chemotherapy may be considered for advanced melanomas that are not responsive to other treatments. It involves the use of drugs to kill cancer cells.</p>
            <p><strong>Adjuvant Therapy</strong> - Adjuvant therapy is used after surgery to reduce the risk of melanoma recurrence. It may include immunotherapy, targeted therapy, or radiation therapy.</p>
            <p><strong>Palliative Care</strong> - In cases of advanced melanoma that cannot be cured, palliative care focuses on symptom management and improving the patient's quality of life.</p>
          </div>
        </div>
      </section>

      {/* Image Placeholder */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="w-full h-96 bg-muted rounded-lg"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Skin Cancer Consultation</h2>
          <p className="text-lg mb-8">
            Seeking a consultation when you observe new skin growths and pigment anomalies, or changes to previously evaluated areas is the first line of defense to skin cancer. Ensure your peace of mind and health by contacting The Derm Café today to request an appointment for cancer screening or melanoma treatment in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule an appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              MEET DR. DAVID HARVEY
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
