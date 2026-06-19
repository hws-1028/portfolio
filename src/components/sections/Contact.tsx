import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiSend,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/data';
import styles from './Contact.module.css';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const infoLinks = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: FiMail,
    label: 'Correo electrónico',
    value: personalInfo.email,
  },
  {
    href: personalInfo.whatsapp,
    icon: FiPhone,
    label: 'WhatsApp',
    value: personalInfo.phone,
    external: true,
  },
  {
    href: personalInfo.linkedin,
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ana-sofia-ricardo-aguilar',
    external: true,
  },
];

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [revealed, setRevealed] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = infoRef.current;
    if (!el || revealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [revealed]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      formData.append('access_key', personalInfo.web3formsAccessKey);
      formData.append('subject', 'Nuevo mensaje desde el portafolio');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Error de conexión. Revisa tu internet e intenta de nuevo.');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          tag="Contacto"
          title="Contacto"
          description="¿Tienes un proyecto en mente? Escríbeme y lo construimos juntos."
        />

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.formCard}>
              {status === 'success' ? (
                <div className={styles.successMsg}>
                  <FiCheckCircle size={40} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Mensaje enviado</h3>
                  <p>Gracias por contactarme. Te responderé pronto.</p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setStatus('idle')}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={styles.input}
                      required
                      placeholder="Tu nombre"
                      autoComplete="name"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      required
                      placeholder="tu@correo.com"
                      autoComplete="email"
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="message" className={styles.label}>
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      required
                      rows={5}
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorMsg}>
                      <FiAlertCircle size={16} />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className={styles.spinner} aria-hidden="true" />
                    ) : (
                      <FiSend size={16} />
                    )}
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <div ref={infoRef} className={styles.infoCol}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>También puedes encontrarme en</h3>

              <div className={styles.infoLinks}>
                {infoLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`${styles.infoLink} ${revealed ? styles['infoLink--revealed'] : ''}`}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <span className={styles.infoIcon}>
                        <Icon size={18} />
                      </span>
                      <div>
                        <span className={styles.infoLabel}>{link.label}</span>
                        <span className={styles.infoValue}>{link.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
