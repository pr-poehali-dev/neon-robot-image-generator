import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

interface LoginFormProps {
  onSuccess: () => void;
}

export default function LoginForm({ onSuccess }: LoginFormProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'skrt2024';

    if (password === adminPassword) {
      localStorage.setItem('skrt_auth', 'true');
      onSuccess();
    } else {
      setError('Неверный пароль');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2f35] via-[#0d1b2a] to-[#000000]">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-[#1a3940]/80 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 shadow-2xl">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Lock" className="text-emerald-400" size={32} />
              <h1 className="text-2xl font-bold text-white">SKRT.POEHALI</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-emerald-300/80 mb-2">
                Пароль
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0d2329]/50 border border-emerald-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all"
                placeholder="Введите пароль"
                disabled={loading}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg p-3"
              >
                <Icon name="AlertCircle" size={16} />
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Icon name="Loader2" size={20} />
                  </motion.div>
                  Проверка...
                </>
              ) : (
                <>
                  <Icon name="LogIn" size={20} />
                  Войти
                </>
              )}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-1 text-xs text-gray-500">
            <Icon name="Shield" size={14} />
            <span>Защищенный доступ</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
