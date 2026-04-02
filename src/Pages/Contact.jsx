import React from 'react';

const Contact = () => {
  const recipientEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const formAction = recipientEmail ? `https://formsubmit.co/${recipientEmail}` : null;
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/contact` : '/contact';

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

        <form className="space-y-6" action={formAction || '#'} method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={nextUrl} />

          <div className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full rounded-xl border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-y-2">
              <form action="https://formsubmit.co/your@email.com" method="POST">
              <label htmlFor="email-address" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
              </label></form>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="email@example.com"
                className="w-full rounded-xl border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                placeholder="How can I help you?"
                className="w-full rounded-xl border border-sky-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              ></textarea>
            </div>
          </div>
           
          <button
            type="submit"
            disabled={!formAction}
            className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold py-3.5 transition shadow-lg shadow-sky-500/25">
            {formAction ? 'Send Message' : 'Send Message'}
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
