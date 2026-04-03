import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('mvzvbjbl');

  return (
    <section className="min-h-[85vh]  dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-16 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-sky-100/80 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 sm:p-10">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Get In Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Have a question or want to work together? Leave a message below.
          </p>
        </div>

        {state.succeeded ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-6 text-center dark:border-emerald-900/70 dark:bg-emerald-950/30">
            <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">Message sent</h3>
            <p className="mt-2 text-sm text-emerald-700/80 dark:text-emerald-200/80">
              Thanks for reaching out. Your conversation request is on its way, and I will get back to you by email soon.
            </p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold  dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border  dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="space-y-2">
                <form
                 action="https://formspree.io/f/mvzvbjbl"
                  method="POST">
                <label htmlFor="email-address" className="block text-sm font-semibold  dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="email@example.com"
                  className="w-full rounded-xl border  dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 "
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-sm text-rose-500"/>
                </form>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold  dark:text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="How can I help you?"
                  className="w-full rounded-xl border  dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2  resize-none"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-sm text-rose-500"
                />
              </div>
            </div>

            <ValidationError errors={state.errors} className="text-sm text-rose-500" />
             
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3.5 border border-blue-600 transition shadow-lg shadow-sky-500/25">
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
          </form>
          
        )}

      </div>
    </section>
  );
};

export default Contact;
