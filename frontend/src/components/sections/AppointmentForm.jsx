import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import clinicConfig from "@/data/clinicConfig";
import { useLanguage } from "@/i18n/LanguageContext";

const initialForm = { name: "", mobile: "", email: "", service: "", time: "", notes: "" };

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [date, setDate] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [calendarOpen, setCalendarOpen] = useState(false);
  const { t } = useLanguage();

  const set = (field) => (e) => {
    const val = e?.target ? e.target.value : e;
    setForm((p) => ({ ...p, [field]: val }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t.appointment.nameRequired;
    if (!form.mobile.trim() || !/^\d{10}$/.test(form.mobile.trim())) e.mobile = t.appointment.mobileInvalid;
    if (!form.service) e.service = t.appointment.serviceRequired2;
    if (!date) e.date = t.appointment.dateRequired;
    if (!form.time) e.time = t.appointment.timeRequired;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setForm(initialForm);
    setDate(null);
    setErrors({});
  };

  return (
    <section id="appointment" className="py-20 md:py-32 bg-clinic-surface" data-testid="appointment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <span className="text-sm font-bold tracking-[0.2em] text-clinic-secondary uppercase font-body">{t.appointment.overline}</span>
            <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-clinic-primary leading-[1.2] tracking-tight">{t.appointment.title}</h2>
            <p className="mt-4 text-base text-clinic-text-secondary font-body leading-relaxed">{t.appointment.subtitle}</p>
            <div className="mt-8 space-y-4">
              {t.contact.days.map((wh) => (
                <div key={wh.day} className="flex items-start gap-3">
                  <CalendarDays className="w-5 h-5 text-clinic-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-semibold text-sm text-clinic-text">{wh.day}</p>
                    <p className="text-sm text-clinic-text-secondary font-body">{wh.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-clinic-border p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" data-testid="appointment-form">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="name" className="font-body text-clinic-text">{t.appointment.patientName} *</Label>
                  <Input id="name" placeholder={t.appointment.namePlaceholder} value={form.name} onChange={set("name")} className={`mt-1.5 h-11 rounded-xl font-body ${errors.name ? "border-red-400" : ""}`} data-testid="appointment-name-input" />
                  {errors.name && <p className="text-xs text-red-500 mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="mobile" className="font-body text-clinic-text">{t.appointment.mobileNumber} *</Label>
                  <Input id="mobile" placeholder={t.appointment.mobilePlaceholder} value={form.mobile} onChange={set("mobile")} className={`mt-1.5 h-11 rounded-xl font-body ${errors.mobile ? "border-red-400" : ""}`} data-testid="appointment-mobile-input" />
                  {errors.mobile && <p className="text-xs text-red-500 mt-1 font-body">{errors.mobile}</p>}
                </div>
                <div>
                  <Label htmlFor="email" className="font-body text-clinic-text">{t.appointment.emailOptional}</Label>
                  <Input id="email" type="email" placeholder={t.appointment.emailPlaceholder} value={form.email} onChange={set("email")} className="mt-1.5 h-11 rounded-xl font-body" data-testid="appointment-email-input" />
                </div>
                <div>
                  <Label className="font-body text-clinic-text">{t.appointment.serviceRequired} *</Label>
                  <Select value={form.service} onValueChange={set("service")}>
                    <SelectTrigger className={`mt-1.5 h-11 rounded-xl font-body ${errors.service ? "border-red-400" : ""}`} data-testid="appointment-service-select">
                      <SelectValue placeholder={t.appointment.selectService} />
                    </SelectTrigger>
                    <SelectContent>
                      {t.appointment.services.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-xs text-red-500 mt-1 font-body">{errors.service}</p>}
                </div>
                <div>
                  <Label className="font-body text-clinic-text">{t.appointment.preferredDate} *</Label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={`mt-1.5 h-11 w-full rounded-xl font-body justify-start text-left font-normal ${!date ? "text-muted-foreground" : ""} ${errors.date ? "border-red-400" : ""}`} data-testid="appointment-date-btn">
                        <CalendarDays className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : t.appointment.pickDate}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={(d) => { setDate(d); setCalendarOpen(false); if (errors.date) setErrors((p) => ({ ...p, date: "" })); }} disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))} initialFocus data-testid="appointment-calendar" />
                    </PopoverContent>
                  </Popover>
                  {errors.date && <p className="text-xs text-red-500 mt-1 font-body">{errors.date}</p>}
                </div>
                <div>
                  <Label className="font-body text-clinic-text">{t.appointment.preferredTime} *</Label>
                  <Select value={form.time} onValueChange={set("time")}>
                    <SelectTrigger className={`mt-1.5 h-11 rounded-xl font-body ${errors.time ? "border-red-400" : ""}`} data-testid="appointment-time-select">
                      <SelectValue placeholder={t.appointment.selectTime} />
                    </SelectTrigger>
                    <SelectContent>
                      {clinicConfig.timeSlots.map((ts) => (
                        <SelectItem key={ts} value={ts}>{ts}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.time && <p className="text-xs text-red-500 mt-1 font-body">{errors.time}</p>}
                </div>
              </div>
              <div className="mt-5">
                <Label htmlFor="notes" className="font-body text-clinic-text">{t.appointment.notesOptional}</Label>
                <textarea id="notes" rows={3} placeholder={t.appointment.notesPlaceholder} value={form.notes} onChange={set("notes")} className="mt-1.5 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-sm font-body shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none" data-testid="appointment-notes-input" />
              </div>
              <Button type="submit" className="mt-6 w-full sm:w-auto rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold text-base px-10 h-12" data-testid="appointment-submit-btn">{t.appointment.submitBtn}</Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-2xl" data-testid="appointment-confirmation-dialog">
          <DialogHeader className="text-center sm:text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-clinic-secondary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-clinic-secondary" />
            </div>
            <DialogTitle className="font-heading text-xl text-clinic-text">{t.appointment.confirmTitle}</DialogTitle>
            <DialogDescription className="font-body text-clinic-text-secondary mt-2">
              {t.appointment.confirmMsg(form.name, form.service, date ? format(date, "PPP") : "", form.time)}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-4">
            <Button className="rounded-full bg-clinic-secondary hover:bg-clinic-secondary-hover text-white font-body font-semibold px-8" onClick={handleClose} data-testid="appointment-confirmation-close-btn">{t.appointment.done}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
